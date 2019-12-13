import { Component, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/security/authentication.service';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter();
  user$ = this.authenticationService.user$;
  loading$ = this.router.events.pipe(
    filter(
      event =>
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError ||
        event instanceof NavigationStart
    ),
    map(event => (event instanceof NavigationStart ? true : false))
  );

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  logout() {
    this.authenticationService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
    return false;
  }
}
