import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as JWT from "jwt-decode";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  connectedCoach: any;

  constructor(private http: HttpClient) {
    this.getToken();
  }

  coachHeader() {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );

    return this.http.post(" http://localhost:9000/coach/add", {
      headers: header
    });
  }

  login(object) {
    console.log(object);
    return this.http.post("http://localhost:9000/coach/authenticate", object);
  }

  getToken() {
    if (localStorage.getItem("token"))
      return (this.connectedCoach = JWT(localStorage.getItem("token")));
  }

  iscoachLoggedIn() {
    let tokenValue = localStorage.getItem("token");
    console.log(tokenValue);
    return true;
  }

  logOut() {
    localStorage.removeItem("token");
  }

  forgetPassword(email) {
    return this.http.post("http://localhost:9000/coach/forget-password", email);
  }

  resetPassword(id, newPass) {
    return this.http.post(
      "http://localhost:9000/coach/reset-password/" + id,
      newPass
    );
  }

  updatePassword(password) {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    console.log(this.getToken().id);
    return this.http.post(
      "http://localhost:9000/coach/update-password/" + this.getToken().id,
      password,
      {
        headers: header
      }
    );
  }
}
