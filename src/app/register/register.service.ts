import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/operators';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router) { }

  public register(input) {
    if (input.email && input.password) {
      this.http.post('https://reqres.in/api/register', JSON.stringify(input))
        .pipe(map(result => result))
        .subscribe(result => {
          this.router.navigate(['/login']);
        });
    }
  }
}
