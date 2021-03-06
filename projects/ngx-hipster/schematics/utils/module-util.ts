import { SchematicsException, Tree } from '@angular-devkit/schematics';
import { InsertChange, Change } from '@schematics/angular/utility/change';
import {
  addImportToModule,
  addExportToModule,
  insertImport
} from '@schematics/angular/utility/ast-utils';
import { getAppModulePath } from '@schematics/angular/utility/ng-ast-utils';
import {
  getRouterModuleDeclaration,
  findNodes
} from '@schematics/angular/utility/ast-utils';

import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';

import { getProject, readFile } from './utils';

export function addRootModuleImport(
  tree: Tree,
  moduleName: string,
  moduleImportPath: string,
  options: { project?: string }
) {
  const filePath = getAppModulePath(
    tree,
    getMainFilePath(getProject(tree, options))
  );

  addModuleImport(tree, filePath, moduleName, moduleImportPath);
}

export function addModuleExport(
  tree: Tree,
  filePath: string,
  moduleName: string,
  moduleImportPath: string
) {
  moduleChanges(tree, filePath, moduleName, moduleImportPath, 'export');
}

export function addModuleImport(
  tree: Tree,
  filePath: string,
  moduleName: string,
  moduleImportPath: string
) {
  moduleChanges(tree, filePath, moduleName, moduleImportPath, 'import');
}

export function addImportStatement(
  tree: Tree,
  filePath: string,
  moduleName: string,
  moduleImportPath: string
) {
  moduleChanges(
    tree,
    filePath,
    moduleName,
    moduleImportPath,
    'importStatement'
  );
}

function moduleChanges(
  tree: Tree,
  filePath: string,
  moduleName: string,
  moduleImportPath: string,
  changeType: string
) {
  const buffer = readFile(tree, filePath);
  const file = ts.createSourceFile(
    filePath,
    buffer.toString(),
    ts.ScriptTarget.Latest,
    true
  );

  let changes: Change[] = [];
  switch (changeType) {
    case 'import':
      changes = addImportToModule(file, filePath, moduleName, moduleImportPath);
      break;
    case 'export':
      changes = addExportToModule(file, filePath, moduleName, moduleImportPath);
      break;
    case 'importStatement':
      changes = [
        insertImport(file, filePath, moduleName, moduleImportPath, false)
      ];
      break;
    default:
  }
  applyChanges(tree, changes, filePath);
}

export function applyChanges(tree: Tree, changes: Change[], filePath: string) {
  const recorder = tree.beginUpdate(filePath);

  changes.forEach((change: Change) => {
    if (change instanceof InsertChange) {
      recorder.insertLeft(change.pos, change.toAdd);
    }
  });

  tree.commitUpdate(recorder);
}

export function getMainFilePath(project: any): string {
  if (
    !project.architect ||
    !project.architect.build ||
    !project.architect.build.options
  ) {
    throw new SchematicsException(
      `Could not find the project build options file`
    );
  }

  const buildOptions = project.architect.build.options;

  if (!buildOptions.main) {
    throw new SchematicsException(`Could not find the project main file`);
  }

  return buildOptions.main;
}

/**
 * Code reference `@schematics/angular/utility/ast-utils#addRouteDeclarationToModule`
 */
export function addAppRouteDeclaration(
  source: ts.SourceFile,
  filePath: string,
  routeDeclaration: string
): Change {
  const routerModuleExpr = getRouterModuleDeclaration(source);
  if (!routerModuleExpr) {
    throw new SchematicsException(
      `Couldn't find a route declaration in ${filePath}.`
    );
  }
  const scopeConfigMethodArgs = (routerModuleExpr as ts.CallExpression)
    .arguments;
  if (!scopeConfigMethodArgs.length) {
    throw new SchematicsException(
      `The router module method doesn't have arguments.`
    );
  }

  let routesArr: ts.ArrayLiteralExpression | undefined;
  const routesArg = scopeConfigMethodArgs[0];

  // Check if the route declarations array is
  // an inlined argument of RouterModule or a standalone variable
  if (ts.isArrayLiteralExpression(routesArg)) {
    routesArr = routesArg;
  } else {
    const routesVarName = routesArg.getText();
    let routesVar;
    if (routesArg.kind === ts.SyntaxKind.Identifier) {
      routesVar = source.statements
        .filter((s: ts.Statement) => s.kind === ts.SyntaxKind.VariableStatement)
        .find((v: ts.VariableStatement) => {
          return (
            v.declarationList.declarations[0].name.getText() === routesVarName
          );
        }) as ts.VariableStatement | undefined;
    }

    if (!routesVar) {
      throw new SchematicsException(
        `No route declaration array was found that corresponds to router module`
      );
    }

    routesArr = findNodes(
      routesVar,
      ts.SyntaxKind.ArrayLiteralExpression,
      1
    )[0] as ts.ArrayLiteralExpression;
  }

  let lastItem: ts.Node | undefined;
  for (const node of (routesArr.elements as unknown) as ts.Node[]) {
    if (!lastItem || lastItem.getStart() < node.getStart()) {
      lastItem = node;
    }
  }

  const lastItemPosition: number = lastItem
    ? lastItem.getStart()
    : routesArr.elements.pos;

  return new InsertChange(filePath, lastItemPosition, routeDeclaration);
}
