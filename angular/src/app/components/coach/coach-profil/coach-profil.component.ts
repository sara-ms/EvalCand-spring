import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CoachService } from "../../../Services/coach.service";
import { AuthService } from "../../../Services/auth.service";

@Component({
  selector: "app-coach-profil",
  templateUrl: "./coach-profil.component.html",
  styleUrls: ["./coach-profil.component.css"]
})
export class CoachProfilComponent implements OnInit {
  coach: any;
  constructor(
    private rout: Router,
    private router: ActivatedRoute,
    private coachServ: CoachService,
    private authService: AuthService
  ) {
    this.coach = this.authService.connectedCoach;
  }

  ngOnInit() {
    this.coach = this.authService.connectedCoach;
  }
}
