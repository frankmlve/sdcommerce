import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorAuth = false;
  errorNoAuth = false;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
    this.form.valueChanges.subscribe(res => {
      this.errorAuth = false;
      this.errorNoAuth = false;
    });
  }

  login() {
    if (this.form.valid){
      console.log(this.form.get('username').value);
      console.log(this.form.get('password').value);
      this.form.get('password').setValue('');
      this.form.get('username').setValue('');
    }
  }

}
