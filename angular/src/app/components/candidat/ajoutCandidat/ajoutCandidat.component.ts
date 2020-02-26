import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormControlName
} from "@angular/forms";
import { CoachService } from "../../../Services/coach.service";

@Component({
  selector: "app-ajoutCandidat",
  templateUrl: "./ajoutCandidat.component.html",
  styleUrls: ["./ajoutCandidat.component.css"]
})
export class ajoutCandidatComponent implements OnInit {
  candidatForm: FormGroup;
  constructor(private coachservice: CoachService) {}

  ngOnInit() {
    this.candidatForm = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      prenom: new FormControl("", [Validators.required]),
      niveau: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required])
    });
  }
  ajoutCandidat() {
    this.coachservice.addCandidat(this.candidatForm.value).subscribe(data => {
      console.log(this.candidatForm.value);
    });
  }
}
