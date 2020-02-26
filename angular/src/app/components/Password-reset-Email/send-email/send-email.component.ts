import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../Services/auth.service";
import { Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-send-email",
  templateUrl: "./send-email.component.html",
  styleUrls: ["./send-email.component.css"]
})
export class SendEmailComponent implements OnInit {
  // emailForm: FormControl;
  idCoach: any;
  token: any;
  constructor(private router: Router, private authService: AuthService) {}

  emailSend = new FormControl("", (Validators.required, Validators.email));
  ngOnInit() {}

  sendingEmail() {
    this.authService
      .forgetPassword({ email: this.emailSend.value })
      .subscribe(data => {
        console.log(data);
      });
  }
}
