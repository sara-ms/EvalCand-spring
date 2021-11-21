import { Component, OnInit } from "@angular/core";
import { EvaluationService } from "../../../Services/evaluation.service";
import { AuthService } from "../../../Services/auth.service";
import { Validators, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-send-email",
  templateUrl: "./send-email.component.html",
  styleUrls: ["./send-email.component.css"]
})
export class SendEmailComponent implements OnInit {
  // emailForm: FormControl;
  idCoach: any;
  token: any;

  operationType: string
  constructor(private route: Router, private activateRoute:ActivatedRoute,
              private evaluationService: EvaluationService, private authService: AuthService) {}

  emailSend = new FormControl("", (Validators.required, Validators.email));

  ngOnInit() {
    this.operationType = this.activateRoute.snapshot.params.type
  }

  // FOnction globale qui envoie un mail pour les quiz/test et qui envoie aussi des mails pour récupérer son mot de passe
  sendEmail() {
    if(this.operationType == 'forget-password') {
      this.sendEmailForForgetPassword();
    } else {
      this.sendQuizEmail();
    }
  }

  sendQuizEmail() {
    this.evaluationService
      .SendEvalToCandidat({ email: this.emailSend.value })
      .subscribe(data => {
        console.log(data);
      });
  }

  sendEmailForForgetPassword() {
    this.authService
      .forgetPassword({ email: this.emailSend.value })
      .subscribe(data => {
        console.log(data);
      });
  }
}
