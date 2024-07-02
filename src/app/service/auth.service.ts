import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private fireauth: Auth,private router: Router) {}

  googleSignIn() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.fireauth, provider)
      .then((result) => {
        this.router.navigate(['/restaurant']);
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
  }

  logout() {
    return this.fireauth.signOut();
  }
}
