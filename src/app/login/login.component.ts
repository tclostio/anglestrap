import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public input: any;

  constructor(private login: LoginService) {
    this.input = {
      'email': '',
      'password': ''
    };
  }

  tryLogin() {
    if (this.input.email && this.input.password) {
      this.login.login(this.input.email, this.input.password);
    } else {
      alert('Please fill out both fields');
    }
  }

  ngOnInit() {
  }

}
