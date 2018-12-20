import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterResultModel } from '../model/RegisterResultModel';
import 'rxjs/operators';
import {map} from 'rxjs/operators';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private user: UserService, private router: Router) { }

  public register(username: string, email: string, password: string) {
    if (username && email && password) {
      this.http.post<RegisterResultModel>('https://reqres.in/api/register', {
        username: username,
        email: email,
        password: password
      }).subscribe(
        request => {
          if (request.token) {
            this.user.setToken(request.token);
            this.router.navigateByUrl('/login');
          }
        },
        request => {
          alert(request.error.error);
        });
    }
  }
}
