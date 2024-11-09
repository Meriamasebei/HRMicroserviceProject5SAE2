import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { KeycloakService } from 'keycloak-angular';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_RL=environment.API_URL;
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.API_RL}auth/login`, { email, password });
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
  }

  gettoken(){
    let token : any = localStorage.getItem('accessToken');
    return token;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessToken');
  }
  

  // Récupère les rôles de l'utilisateur
  getUserRoles(): any {
    return localStorage.getItem('userRole');
  }

}
