import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthenticationService } from './security/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}
  ngOnInit() {
    this.authenticationService.fetchUserInfoWhenAuthenticated().subscribe();
  }
}
