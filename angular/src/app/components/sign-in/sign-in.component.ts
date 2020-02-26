import { Component, OnInit } from "@angular/core";
import { CoachService } from "../../Services/coach.service";
import { AuthService } from "../../Services/auth.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { from } from "rxjs";
@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private coachServ: CoachService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(""),
      password: new FormControl("")
    });
  }
  checkLogin() {
    this.authService.login(this.loginForm.value).subscribe((response: any) => {
      console.log(this.loginForm.value);
      console.log(response);
      localStorage.setItem("token", response.token);
      this.router.navigateByUrl("dashboard");
    });
  }
}
