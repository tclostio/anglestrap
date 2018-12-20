import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResultModel } from '../model/LoginResultModel';
import { Router } from '@angular/router';
import 'rxjs/operators';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private user: UserService, private router: Router) {
  }

  public login(email: string, password: string) {
    if (email && password) {
      this.http.post<LoginResultModel>('https://reqres.in/api/login', {
        email: email,
        password: password
      }).subscribe(
        request => {
          if (request.token) {
            this.user.setToken(request.token);
            this.router.navigateByUrl('/profile');
          }
        },
        request => {
          alert(request.error.error);
        }
      );
    }
  }
}
