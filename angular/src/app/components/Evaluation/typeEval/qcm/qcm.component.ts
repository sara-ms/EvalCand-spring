import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { EvaluationService } from "../../../../Services/evaluation.service";

@Component({
  selector: "app-qcm",
  templateUrl: "./qcm.component.html",
  styleUrls: ["./qcm.component.css"]
})
export class QcmComponent implements OnInit {
  @Output() retour = new EventEmitter<string>();

  ajoutForm: FormGroup;
  items: FormArray;
  constructor(
    private readonly formBuilder: FormBuilder,
    private EvalService: EvaluationService
  ) {
    this.ajoutForm = this.formBuilder.group({
      q: this.formBuilder.group({
        payload: [""],
        type: [""]
      }),
      r: this.formBuilder.array([this.addRes()])
    });

    this.addItem();
    this.addItem();
  }

  private addRes(): FormGroup {
    return this.formBuilder.group({
      reponse: [""],
      correct: false
    });
  }

  addItem(): void {
    this.items = this.ajoutForm.get("r") as FormArray;
    this.items.push(this.addRes());
  }

  ngOnInit() {}

  submit() {
    console.log(this.ajoutForm);
    this.EvalService.addEvaluationQUIZ(this.ajoutForm.value).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  Return() {
    this.retour.emit("retour");
  }
}
