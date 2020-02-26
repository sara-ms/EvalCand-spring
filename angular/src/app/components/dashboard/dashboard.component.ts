import { Component, OnInit } from "@angular/core";
import * as Chartist from "chartist";
import { Router } from "@angular/router";
import { EvaluationService } from '../../Services/evaluation.service';
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  evaluations: any;
  evaluation;
  constructor(private router: Router, private evalservice: EvaluationService) { }

  ngOnInit() {
    if (!localStorage.getItem("token")){
      this.router.navigate(["/"])
    };

      this.getAllEvaluation();
  }

    DuplicateEval(evaluation)  {
      this.evalservice.DuplicateEval(evaluation).subscribe(data => {
        console.log(data);
        this.evalservice.setEvaluation(data);
        this.router.navigate(["/ajouter-Eval"]);
      });
    }
  
    getAllEvaluation(): void {
      this.evalservice.affichageEval().subscribe(data => {
        this.evaluations = data;
        console.log(data);
      });
    }
  //   DeleteEval(evaluation){
  //     this.evalservice.DeleteEval(evaluation.id)
  //       .subscribe( data => {
  //         this.evaluations = this.evaluations.filter(u => u !== evaluation);
  //       })
  // }
}
