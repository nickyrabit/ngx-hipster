import { TestBed, inject } from '@angular/core/testing';
import { AuthenticatedUserGuard } from './authenticated-user.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticatedUserGuard],
      imports: [HttpClientModule, RouterTestingModule],
    });
  });

  it('should ...', inject(
    [AuthenticatedUserGuard],
    (guard: AuthenticatedUserGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
