import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { collService } from '../college/coll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _data: collService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.login = this.fb.group({
      user_email: new FormControl(),
      user_password: new FormControl()
    });
  }

  onLoginSubmit() {
    this._data.login(
      this.login.value.user_email,
      this.login.value.user_password
    );
    if (this._data.redirectURL) {
      this._router.navigateByUrl(this._data.redirectURL);
    } else {
      this._router.navigate(['/home']);
    }
  }

}
