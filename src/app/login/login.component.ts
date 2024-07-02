import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(public auth: AuthService) { }

  login() {
    this.auth.googleSignIn().then((result) => {
      console.log('User logged in successfully:', result);
    }).catch((error) => {
      console.error('Error logging in:', error);
    });
  }
}
