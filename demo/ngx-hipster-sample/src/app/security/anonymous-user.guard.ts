import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthenticatedUserGuard } from './authenticated-user.guard';

@Injectable({
  providedIn: 'root',
})
export class AnonymousUserGuard implements CanActivate {
  constructor(
    private authenticatedUserGuard: AuthenticatedUserGuard,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authenticatedUserGuard.canActivate(next, state).pipe(
      map(result => {
        if (result) {
          this.router.navigate(['/']);
        }
        return !result;
      })
    );
  }
}
