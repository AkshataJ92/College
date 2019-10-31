import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class collService {
 url= ' https://5df2226b.ngrok.io/api/Settings/GetDesignations';
 deleteUrl= 'https://5df2226b.ngrok.io/api/Settings/DeleteDesignation?DesignationId=';
 editUrl= 'https://5df2226b.ngrok.io/api/Settings/InsUpdateDesignation';
  constructor(private _http: HttpClient,private _router: Router) {}

  getAllColleges() {
      return this._http.get(this.url);
  }

  deleteCollege(id) {
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.deleteUrl + id, {headers: head});
  }

  addcollege(item) {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.editUrl, body, {headers: head});
  }

  editcollege(item) {
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(item);
    return this._http.post(this.editUrl , body, {headers: head});
  }

  currentUser;
  redirectURL: string;
  login(user_email: string, user_password: string) {
    if (user_email == "admin" && user_password == "1234") {
      this.currentUser = {
        user_email: user_email,
        password: user_password,
        isAdmin: true
      };
      return;
    }
    this.currentUser = {
      user_email: user_email,
      password: user_password,
      isAdmin: false
    };
  }
  logout() {
    this.currentUser = null;
    this.redirectURL = "";
    this._router.navigate([""]);
  }
  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

}
