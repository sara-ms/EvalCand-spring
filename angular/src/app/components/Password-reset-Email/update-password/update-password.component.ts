import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../Services/auth.service";
import { Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-update-password",
  templateUrl: "./update-password.component.html",
  styleUrls: ["./update-password.component.css"]
})
export class UpdatePasswordComponent implements OnInit {
  id;
  constructor(private authservice: AuthService, private router: Router) {}

  password = new FormControl("", Validators.required);
  ngOnInit() {}
  updatePass() {
    // this.id = this.authservice.getToken().id;
    this.authservice
      .updatePassword({ password: this.password.value })
      .subscribe(data => {
        console.log(data);
      });
  }
}
