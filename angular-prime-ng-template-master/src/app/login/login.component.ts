import { Component, OnInit } from '@angular/core';
import { AuthService } from '../config/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(private authService: AuthService) {
   // this.authService.init(); // Initialize Keycloak
  }



}
