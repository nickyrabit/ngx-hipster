(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ubTF:function(e,t,r){"use strict";r.r(t);var o=r("tyNb"),a=r("PCNd"),n=r("0IaG"),i=r("fXoL"),c=r("bTqV"),l=r("NFeN");let s=(()=>{class e{constructor(e){this.data=e}}return e.\u0275fac=function(t){return new(t||e)(i.Rb(n.a))},e.\u0275cmp=i.Lb({type:e,selectors:[["app-movie-delete"]],decls:19,vars:2,consts:[["mat-dialog-title",""],[1,"content"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","accent",3,"mat-dialog-close"]],template:function(e,t){1&e&&(i.Xb(0,"h2",0),i.Dc(1,"Delete movie"),i.Wb(),i.Xb(2,"mat-dialog-content"),i.Xb(3,"div",1),i.Dc(4," Are you sure you want to delete movie "),i.Xb(5,"strong"),i.Dc(6),i.Wb(),i.Dc(7," ? "),i.Wb(),i.Wb(),i.Xb(8,"mat-dialog-actions"),i.Xb(9,"button",2),i.Xb(10,"mat-icon"),i.Dc(11,"cancel"),i.Wb(),i.Xb(12,"span"),i.Dc(13,"No"),i.Wb(),i.Wb(),i.Xb(14,"button",3),i.Xb(15,"mat-icon"),i.Dc(16,"delete"),i.Wb(),i.Xb(17,"span"),i.Dc(18,"Yes"),i.Wb(),i.Wb(),i.Wb()),2&e&&(i.Fb(6),i.Ec(t.data.id),i.Fb(8),i.pc("mat-dialog-close",!0))},directives:[n.g,n.e,n.c,c.a,n.d,l.a],styles:[".content[_ngcontent-%COMP%]{min-height:5rem;overflow:auto}"],changeDetection:0}),e})();var b=r("lJxs"),m=r("tk/3");let u=(()=>{class e{constructor(e){this.http=e,this.resourceUrl="api/movies"}query(){return this.http.get(this.resourceUrl).pipe(Object(b.a)(e=>this.parseArrayResponse(e)))}getById(e){return this.http.get(`${this.resourceUrl}/${e}`).pipe(Object(b.a)(e=>this.parseResponse(e)))}create(e){return this.http.post(this.resourceUrl,e)}update(e){return this.http.put(`${this.resourceUrl}/${e.id}`,e)}delete(e){return this.http.delete(`${this.resourceUrl}/${e}`)}parseArrayResponse(e){return e.forEach(e=>{this.parseResponse(e)}),e}parseResponse(e){return e.releaseDate=new Date(e.releaseDate),e}}return e.\u0275fac=function(t){return new(t||e)(i.bc(m.b))},e.\u0275prov=i.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=r("ofXK"),p=r("STbY"),f=r("Wp6s"),v=r("Xa2L"),h=r("+0xr");function g(e,t){1&e&&i.Sb(0,"mat-progress-spinner",9)}function W(e,t){1&e&&(i.Xb(0,"div"),i.Xb(1,"span",10),i.Dc(2,"No records found"),i.Wb(),i.Wb())}function D(e,t){1&e&&(i.Xb(0,"th",20),i.Dc(1,"Title"),i.Wb())}function X(e,t){if(1&e&&(i.Xb(0,"td",21),i.Dc(1),i.Wb()),2&e){const e=t.$implicit;i.Fb(1),i.Ec(e.title)}}function y(e,t){1&e&&(i.Xb(0,"th",20),i.Dc(1,"Director"),i.Wb())}function w(e,t){if(1&e&&(i.Xb(0,"td",21),i.Dc(1),i.Wb()),2&e){const e=t.$implicit;i.Fb(1),i.Ec(e.director)}}function k(e,t){1&e&&(i.Xb(0,"th",20),i.Dc(1,"Release Date"),i.Wb())}function C(e,t){if(1&e&&(i.Xb(0,"td",21),i.Dc(1),i.kc(2,"date"),i.Wb()),2&e){const e=t.$implicit;i.Fb(1),i.Fc(" ",i.mc(2,1,e.releaseDate,"MM/yyyy")," ")}}function F(e,t){1&e&&i.Sb(0,"th",20)}const O=function(e,t){return{id:e,element:t}};function S(e,t){if(1&e&&(i.Xb(0,"td",21),i.Xb(1,"button",22),i.Xb(2,"mat-icon"),i.Dc(3,"more_vert"),i.Wb(),i.Wb(),i.Wb()),2&e){const e=t.$implicit;i.jc(3);const r=i.uc(3);i.Fb(1),i.pc("matMenuTriggerFor",r)("matMenuTriggerData",i.sc(2,O,e.id,e))}}function x(e,t){1&e&&i.Sb(0,"tr",23)}function R(e,t){1&e&&i.Sb(0,"tr",24)}function I(e,t){if(1&e&&(i.Xb(0,"table",11),i.Vb(1,12),i.Cc(2,D,2,0,"th",13),i.Cc(3,X,2,1,"td",14),i.Ub(),i.Vb(4,15),i.Cc(5,y,2,0,"th",13),i.Cc(6,w,2,1,"td",14),i.Ub(),i.Vb(7,16),i.Cc(8,k,2,0,"th",13),i.Cc(9,C,3,4,"td",14),i.Ub(),i.Vb(10,17),i.Cc(11,F,1,0,"th",13),i.Cc(12,S,4,5,"td",14),i.Ub(),i.Cc(13,x,1,0,"tr",18),i.Cc(14,R,1,0,"tr",19),i.Wb()),2&e){const e=i.jc().ngIf,t=i.jc();i.pc("dataSource",e.movies),i.Fb(13),i.pc("matHeaderRowDef",t.displayedColumns)("matHeaderRowDefSticky",!0),i.Fb(1),i.pc("matRowDefColumns",t.displayedColumns)}}const M=function(){return["/movies","new"]};function P(e,t){if(1&e&&(i.Xb(0,"mat-card"),i.Xb(1,"div",3),i.Xb(2,"span",4),i.Dc(3,"Movies"),i.Wb(),i.Xb(4,"div"),i.Xb(5,"button",5),i.Xb(6,"mat-icon"),i.Dc(7,"add"),i.Wb(),i.Xb(8,"span"),i.Dc(9,"Create"),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Xb(10,"mat-card-content",6),i.Cc(11,g,1,0,"mat-progress-spinner",7),i.Cc(12,W,3,0,"div",0),i.Cc(13,I,15,4,"table",8),i.Wb(),i.Wb()),2&e){const e=t.ngIf,r=i.jc();i.Fb(5),i.pc("routerLink",i.qc(4,M)),i.Fb(6),i.pc("ngIf",r.showLoader),i.Fb(1),i.pc("ngIf",!(null!=e.movies&&e.movies.length)),i.Fb(1),i.pc("ngIf",!(null==e.movies||!e.movies.length))}}const L=function(e){return["/movies",e,"edit"]};function B(e,t){if(1&e){const e=i.Yb();i.Xb(0,"button",25),i.Xb(1,"mat-icon"),i.Dc(2,"edit"),i.Wb(),i.Xb(3,"span"),i.Dc(4,"Edit"),i.Wb(),i.Wb(),i.Xb(5,"button",26),i.fc("click",(function(r){i.wc(e);const o=t.id,a=t.element;return i.jc().delete(o,a)})),i.Xb(6,"mat-icon"),i.Dc(7,"delete"),i.Wb(),i.Xb(8,"span"),i.Dc(9,"Delete"),i.Wb(),i.Wb()}2&e&&i.pc("routerLink",i.rc(1,L,t.id))}let G=(()=>{class e{constructor(e,t,r,o){this.route=e,this.router=t,this.dialog=r,this.movieService=o,this.displayedColumns=["title","director","releaseDate","formActions"],this.routeData$=this.route.data,this.showLoader=!1}ngOnInit(){}delete(e,t){this.dialog.open(s,{data:t}).afterClosed().subscribe(t=>{t&&(this.showLoader=!0,this.movieService.delete(e).subscribe({next:()=>this.router.navigate(["/movies"]),error:()=>this.showLoader=!1,complete:()=>this.showLoader=!1}))})}}return e.\u0275fac=function(t){return new(t||e)(i.Rb(o.a),i.Rb(o.f),i.Rb(n.b),i.Rb(u))},e.\u0275cmp=i.Lb({type:e,selectors:[["app-movie-list"]],decls:5,vars:3,consts:[[4,"ngIf"],["menu","matMenu"],["matMenuContent",""],[1,"page-heading"],[1,"mat-card-title"],["mat-raised-button","","color","accent",3,"routerLink"],[1,"table-container"],["diameter","50","class","table-overlay","color","accent","mode","indeterminate",4,"ngIf"],["mat-table","","matSort","",3,"dataSource",4,"ngIf"],["diameter","50","color","accent","mode","indeterminate",1,"table-overlay"],[1,"table-overlay"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","title"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","director"],["matColumnDef","releaseDate"],["matColumnDef","formActions"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","data-row",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","accent","aria-label","Movie form actions ",3,"matMenuTriggerFor","matMenuTriggerData"],["mat-header-row",""],["mat-row","",1,"data-row"],["mat-menu-item","","aria-label","Edit movie",3,"routerLink"],["mat-menu-item","","aria-label","Delete movie",3,"click"]],template:function(e,t){1&e&&(i.Cc(0,P,14,5,"mat-card",0),i.kc(1,"async"),i.Xb(2,"mat-menu",null,1),i.Cc(4,B,10,3,"ng-template",2),i.Wb()),2&e&&i.pc("ngIf",i.lc(1,1,t.routeData$))},directives:[d.l,p.e,p.a,f.a,c.a,o.g,l.a,f.c,v.a,h.j,h.c,h.e,h.b,h.g,h.i,h.d,h.a,p.d,h.f,h.h,p.b],pipes:[d.b,d.e],styles:[".page-heading[_ngcontent-%COMP%]{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:justify;justify-content:space-between;padding-bottom:16px}.table-container[_ngcontent-%COMP%]{overflow:auto;position:relative;min-height:200px;max-height:565px;margin:0 -16px}.table-overlay[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%}.btn-margin-right[_ngcontent-%COMP%]{margin-right:14px}table[_ngcontent-%COMP%]{width:100%}td.mat-column-formActions[_ngcontent-%COMP%]{width:20px;padding-right:8px!important}tr.data-row[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.1)}"],changeDetection:0}),e})();var U=r("JX91"),q=r("3Pt+");let A=(()=>{class e{constructor(e){this.formBuilder=e}toFormGroup(e={}){return this.formBuilder.group({id:this.formBuilder.control(e.id,[]),title:this.formBuilder.control(e.title,[q.m.required,q.m.minLength(2),q.m.maxLength(200)]),plot:this.formBuilder.control(e.plot,[q.m.minLength(100),q.m.maxLength(1e3)]),rated:this.formBuilder.control(e.rated,[]),genres:this.formBuilder.control(e.genres,[q.m.required]),director:this.formBuilder.control(e.director,[q.m.required]),writer:this.formBuilder.control(e.writer,[q.m.required]),releaseDate:this.formBuilder.control(e.releaseDate,[q.m.required])})}fromFormGroup(e){return{id:e.get("id").value,title:e.get("title").value,plot:e.get("plot").value,rated:e.get("rated").value,genres:e.get("genres").value,director:e.get("director").value,writer:e.get("writer").value,releaseDate:e.get("releaseDate").value}}}return e.\u0275fac=function(t){return new(t||e)(i.bc(q.b))},e.\u0275prov=i.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var N=r("kmnG"),_=r("qFsG"),$=r("+LyL"),j=r("QibW"),E=r("d3UM"),T=r("FKr1"),H=r("/1cH"),J=r("iadO");function K(e,t){1&e&&i.Sb(0,"mat-progress-spinner",28)}function V(e,t){if(1&e&&(i.Xb(0,"mat-radio-button",29),i.Dc(1),i.Wb()),2&e){const e=t.$implicit;i.pc("value",e.key),i.Fb(1),i.Ec(e.value)}}function Y(e,t){if(1&e&&(i.Xb(0,"mat-option",29),i.Dc(1),i.Wb()),2&e){const e=t.$implicit;i.pc("value",e.key),i.Fb(1),i.Ec(e.value)}}function z(e,t){if(1&e&&(i.Xb(0,"mat-option",29),i.Dc(1),i.Wb()),2&e){const e=t.$implicit;i.pc("value",e.key),i.Fb(1),i.Ec(e.value)}}function Q(e,t){if(1&e&&(i.Xb(0,"mat-option",29),i.Dc(1),i.Wb()),2&e){const e=t.$implicit;i.pc("value",e.key),i.Fb(1),i.Ec(e.value)}}let Z=(()=>{class e{constructor(e,t,r,o){this.route=e,this.router=t,this.formService=r,this.movieService=o,this.isSaveOrUpdateInProgress=!1,this.ratedOptions=[{key:"PG",value:"PG"},{key:"PG-13",value:"PG - 13"}],this.genresOptions=[{key:"Adventure",value:"Adventure"},{key:"Action",value:"Action"},{key:"Fantasy",value:"Fantasy"}],this.directorOptions=[{key:"George Lucas",value:"George Lucas"},{key:"Irvin Kershner",value:"Irvin Kershner"},{key:"Richard Marquand",value:"Richard Marquand"}],this.writerOptions=[{key:"George Lucas",value:"George Lucas"},{key:"Leigh Brackett",value:"Leigh Brackett"},{key:"Lawrence Kasdan",value:"Lawrence Kasdan"},{key:"Roberto Orci",value:"Roberto Orci"},{key:"Gene Roddenberry",value:"Gene Roddenberry"},{key:"Rick Berman",value:"Rick Berman"},{key:"Brannon Braga",value:"Brannon Braga"},{key:"Ronald D. Moore",value:"Ronald D. Moore"},{key:"Harve Bennett",value:"Harve Bennett"},{key:"Jack B. Sowards",value:"Jack B. Sowards"},{key:"Jonathan Hales",value:"Jonathan Hales"},{key:"Alex Kurtzman",value:"Alex Kurtzman"}],this.error=void 0}ngOnInit(){this.route.data.subscribe(({movie:e})=>{this.movie=e,this.form=this.formService.toFormGroup(e)}),this.filteredWriterOptions=this.form.get("writer").valueChanges.pipe(Object(U.a)(null),Object(b.a)(e=>e?this.filterWriterOptions(e):this.writerOptions)),this.error=void 0}saveOrUpdate(){this.isSaveOrUpdateInProgress=!0,this.error=void 0,this.subscribeToResponse(this.form.value.id?this.movieService.update(this.formService.fromFormGroup(this.form)):this.movieService.create(this.formService.fromFormGroup(this.form)))}subscribeToResponse(e){e.subscribe({next:()=>this.router.navigate(["/movies"]),error:e=>{this.isSaveOrUpdateInProgress=!1,this.error=e.error&&(e.error.detail||e.error.title)||"Internal Server Error"},complete:()=>this.isSaveOrUpdateInProgress=!1})}filterWriterOptions(e){return this.writerOptions.filter(t=>-1!==t.value.toLowerCase().indexOf(e.toLowerCase()))}cancel(){return this.router.navigate(["/movies"]),!1}}return e.\u0275fac=function(t){return new(t||e)(i.Rb(o.a),i.Rb(o.f),i.Rb(A),i.Rb(u))},e.\u0275cmp=i.Lb({type:e,selectors:[["app-movie-detail"]],decls:73,vars:21,consts:[["novalidate","",3,"formGroup","ngSubmit"],[1,"card"],["diameter","50","class","form-overlay","color","accent","mode","indeterminate",4,"ngIf"],[1,"error","mat-error"],[1,"content"],[1,"full-width"],["matInput","","placeholder","Enter movie title","formControlName","title","required",""],["label","Title",3,"control"],["matInput","","placeholder","Enter movie plot","formControlName","plot"],["label","Plot",3,"control"],[1,"full-width","content--inline-display"],["formControlName","rated","aria-label","Rated"],[3,"value",4,"ngFor","ngForOf"],["formControlName","genres","required","","multiple",""],["label","Genres",3,"control"],["formControlName","director","required",""],["label","Director",3,"control"],["type","text","required","","matInput","","placeholder","Select movie writer","formControlName","writer",3,"matAutocomplete"],["autoActiveFirstOption","true"],["autoWriter","matAutocomplete"],["label","Writer",3,"control"],["type","text","required","","matInput","","placeholder","Select movie release date","formControlName","releaseDate",3,"matDatepicker"],["matSuffix","","color","accent",3,"for"],["color","accent"],["releaseDatePicker",""],["label","Release Date",3,"control"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent","type","submit",3,"disabled"],["diameter","50","color","accent","mode","indeterminate",1,"form-overlay"],[3,"value"]],template:function(e,t){if(1&e&&(i.Xb(0,"form",0),i.fc("ngSubmit",(function(e){return t.saveOrUpdate()})),i.Xb(1,"mat-card",1),i.Cc(2,K,1,0,"mat-progress-spinner",2),i.Xb(3,"mat-card-title"),i.Dc(4,"movie"),i.Wb(),i.Xb(5,"mat-card-subtitle"),i.Dc(6),i.Wb(),i.Xb(7,"div",3),i.Dc(8),i.Wb(),i.Xb(9,"mat-card-content",4),i.Xb(10,"mat-form-field",5),i.Xb(11,"mat-label"),i.Dc(12,"Title"),i.Wb(),i.Sb(13,"input",6),i.Xb(14,"mat-error"),i.Sb(15,"hip-ngx-error",7),i.Wb(),i.Wb(),i.Xb(16,"mat-form-field",5),i.Xb(17,"mat-label"),i.Dc(18,"Plot"),i.Wb(),i.Sb(19,"textarea",8),i.Xb(20,"mat-error"),i.Sb(21,"hip-ngx-error",9),i.Wb(),i.Wb(),i.Xb(22,"div",10),i.Xb(23,"mat-label"),i.Dc(24,"Rated"),i.Wb(),i.Xb(25,"mat-radio-group",11),i.Cc(26,V,2,2,"mat-radio-button",12),i.Wb(),i.Wb(),i.Xb(27,"mat-form-field",5),i.Xb(28,"mat-label"),i.Dc(29,"Genres"),i.Wb(),i.Xb(30,"mat-select",13),i.Cc(31,Y,2,2,"mat-option",12),i.Wb(),i.Xb(32,"mat-error"),i.Sb(33,"hip-ngx-error",14),i.Wb(),i.Wb(),i.Xb(34,"mat-form-field",5),i.Xb(35,"mat-label"),i.Dc(36,"Director"),i.Wb(),i.Xb(37,"mat-select",15),i.Xb(38,"mat-option"),i.Dc(39,"--Select--"),i.Wb(),i.Cc(40,z,2,2,"mat-option",12),i.Wb(),i.Xb(41,"mat-error"),i.Sb(42,"hip-ngx-error",16),i.Wb(),i.Wb(),i.Xb(43,"mat-form-field",5),i.Xb(44,"mat-label"),i.Dc(45,"Writer"),i.Wb(),i.Sb(46,"input",17),i.Xb(47,"mat-autocomplete",18,19),i.Cc(49,Q,2,2,"mat-option",12),i.kc(50,"async"),i.Wb(),i.Xb(51,"mat-error"),i.Sb(52,"hip-ngx-error",20),i.Wb(),i.Wb(),i.Xb(53,"mat-form-field",5),i.Xb(54,"mat-label"),i.Dc(55,"Release Date"),i.Wb(),i.Sb(56,"input",21),i.Sb(57,"mat-datepicker-toggle",22),i.Sb(58,"mat-datepicker",23,24),i.Xb(60,"mat-error"),i.Sb(61,"hip-ngx-error",25),i.Wb(),i.Wb(),i.Wb(),i.Xb(62,"mat-card-actions"),i.Xb(63,"button",26),i.fc("click",(function(e){return t.cancel()})),i.Xb(64,"mat-icon"),i.Dc(65,"cancel"),i.Wb(),i.Xb(66,"span"),i.Dc(67,"Cancel"),i.Wb(),i.Wb(),i.Xb(68,"button",27),i.Xb(69,"mat-icon"),i.Dc(70,"save"),i.Wb(),i.Xb(71,"span"),i.Dc(72),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Wb()),2&e){const e=i.uc(48),r=i.uc(59);i.pc("formGroup",t.form),i.Fb(2),i.pc("ngIf",t.isSaveOrUpdateInProgress),i.Fb(4),i.Ec(null!=t.movie&&t.movie.id?"Update an existing movie.":"Creates a new movie."),i.Fb(2),i.Fc(" ",t.error?t.error:"\xa0"," "),i.Fb(7),i.pc("control",t.form.get("title")),i.Fb(6),i.pc("control",t.form.get("plot")),i.Fb(5),i.pc("ngForOf",t.ratedOptions),i.Fb(5),i.pc("ngForOf",t.genresOptions),i.Fb(2),i.pc("control",t.form.get("genres")),i.Fb(7),i.pc("ngForOf",t.directorOptions),i.Fb(2),i.pc("control",t.form.get("director")),i.Fb(4),i.pc("matAutocomplete",e),i.Fb(3),i.pc("ngForOf",i.lc(50,19,t.filteredWriterOptions)),i.Fb(3),i.pc("control",t.form.get("writer")),i.Fb(4),i.pc("matDatepicker",r),i.Fb(1),i.pc("for",r),i.Fb(4),i.pc("control",t.form.get("releaseDate")),i.Fb(7),i.pc("disabled",t.form.invalid||t.isSaveOrUpdateInProgress),i.Fb(4),i.Fc("",null!=t.movie&&t.movie.id?"Update":"Save"," ")}},directives:[q.n,q.i,q.d,f.a,d.l,f.f,f.e,f.c,N.b,N.e,_.b,q.a,q.h,q.c,q.l,N.a,$.a,j.b,d.k,E.a,T.k,H.c,H.a,J.b,J.d,N.f,J.a,f.b,c.a,l.a,v.a,j.a],pipes:[d.b],styles:[".full-width[_ngcontent-%COMP%]{width:100%}.content--inline-display[_ngcontent-%COMP%]{display:inline-block}.form-overlay[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%}.card[_ngcontent-%COMP%]{min-width:120px;position:relative}.error[_ngcontent-%COMP%]{margin-top:.5rem;margin-bottom:1rem}.mat-radio-button[_ngcontent-%COMP%]{margin:5px 14px;height:29px}.mat-card-subtitle[_ngcontent-%COMP%]{margin-bottom:0}.content[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}"],changeDetection:0}),e})();var ee=r("LRne");let te=(()=>{class e{constructor(e){this.service=e}resolve(e){const t=e.params.id;return t?this.service.getById(t):Object(ee.a)(void 0)}}return e.\u0275fac=function(t){return new(t||e)(i.bc(u))},e.\u0275prov=i.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const re=[{path:"new",component:Z,resolve:{movie:te}},{path:":id/edit",component:Z,resolve:{movie:te}},{path:"",component:G,resolve:{movies:(()=>{class e{constructor(e){this.service=e}resolve(e){return this.service.query()}}return e.\u0275fac=function(t){return new(t||e)(i.bc(u))},e.\u0275prov=i.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},runGuardsAndResolvers:"always"}];r.d(t,"MovieModule",(function(){return oe}));let oe=(()=>{class e{}return e.\u0275mod=i.Pb({type:e}),e.\u0275inj=i.Ob({factory:function(t){return new(t||e)},imports:[[a.a,o.j.forChild(re)]]}),e})()}}]);