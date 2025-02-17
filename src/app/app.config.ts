import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBALSY5WRp-fgQUAXawjzvFcd7ZGpqMPGc",
  authDomain: "zomato-e10ee.firebaseapp.com",
  projectId: "zomato-e10ee",
  storageBucket: "zomato-e10ee.appspot.com",
  messagingSenderId: "73423423729",
  appId: "1:73423423729:web:85c4aa0549c974c8c30150"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()), provideAnimationsAsync()
  ]
};


