import { Component, OnInit } from '@angular/core';
import {RegisterService} from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  public input: any;

  constructor(private register: RegisterService) {
    this.input = {
      'username': '',
      'email': '',
      'password': '',
      'passVerify': ''
    };
  }

  tryRegister() {
    if (this.input.password === this.input.passVerify) {
      if (this.input) {
        this.register.register(this.input.username,
          this.input.email,
          this.input.password);
      }
    } else {
      alert('Non-matching passwords. Try again.');
    }
  }

  ngOnInit() {
  }
}
