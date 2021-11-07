import { Component, OnInit } from "@angular/core";
import * as Chartist from "chartist";
import { Router } from "@angular/router";
import { EvaluationService } from "../../Services/evaluation.service";
import { CoachService } from "../../Services/coach.service";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  evaluations: any;
  evaluation;
  allCand;
  getId;
  form: FormGroup;

  constructor(
    private router: Router,
    private evalservice: EvaluationService,
    private coachservice: CoachService,
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      candidatEmail: this.fb.array([])
    });
    if (!localStorage.getItem("token")) {
      this.router.navigate(["/"]);
    }
    this.getAllEvaluation();

    this.coachservice.afficheAllCand().subscribe(data => {
      this.allCand = data;
      console.log(this.allCand);
    });
  }

  // Duplicate All Evaluation

  DuplicateEval(evaluation) {
    this.evalservice.DuplicateEval(evaluation).subscribe(data => {
      console.log(data);
      this.evalservice.setEvaluation(data);
      this.router.navigate(["/ajouter-Eval"]);
      this.getId = this.activateRoute.snapshot.params.id;
    });
  }

  // display all evaluation

  getAllEvaluation(): void {
    this.evalservice.affichageEval().subscribe(data => {
      this.evaluations = data;
      console.log(data);
    });
  }

  // checkbox Candidats

  onChange(email: string, isChecked: boolean) {
    const emailArray = <FormArray>this.form.controls.candidatEmail;

    if (isChecked) {
      emailArray.push(new FormControl(email));
    } else {
      let index = emailArray.controls.findIndex(x => x.value == email);
      emailArray.removeAt(index);
    }
    console.log(emailArray.value);
  }

  // Send Evaluation to Candidats

  sendEval() {
    let listEval = this.form.value.candidatEmail;
    for (let i = 0; i < listEval.length; i++) {
      this.evalservice
        .SendEvalToCandidat({ email: listEval[i] })
        .subscribe(data => {
          console.log(data);
        });
    }
  }

  //Delete Evaluation

  deleteEvaluation(id) {
    console.log(id);
    this.evalservice.deleteEval(id).subscribe(data => {
      console.log(data);
    });
  }
}
