import { Component, OnInit } from "@angular/core";
import { EvaluationService } from "../../../Services/evaluation.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-eval-type-qr",
  templateUrl: "./eval-type-qr.component.html",
  styleUrls: ["./eval-type-qr.component.css"]
})
export class EvalTypeQRComponent implements OnInit {
  listQR;
  i = 0;
  j = 1;
  tab = [
    {
      question: "where are you from",
      reponse1: "tunis",
      reponse2: "france",
      reponse3: "london",
      reponse4: "tunis"
    },

    {
      question: "how old are you",
      reponse1: "11",
      reponse2: "19",
      reponse3: "25",
      reponse4: "35"
    }
  ];
  constructor(
    private evalService: EvaluationService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {}
  next() {
    this.i = this.i + 1;
    this.j = this.j + 1;
  }
  previous(i, j) {
    this.i = this.i - 1;
    this.j = this.j - 1;
  }

  displayEvaluation() {
    this.evalService.displayEval().subscribe(data => {
      console.log(data);
      this.listQR = data;
    });
  }
}
