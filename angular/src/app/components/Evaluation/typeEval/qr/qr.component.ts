import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormControlName,
  FormArray
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { EvaluationService } from "../../../../Services/evaluation.service";

@Component({
  selector: "app-qr",
  templateUrl: "./qr.component.html",
  styleUrls: ["./qr.component.css"]
})
export class QRComponent implements OnInit {
  skills: FormArray;
  @Input() object: any;
  @Output() retour = new EventEmitter<string>();
  tp = new FormGroup({
    skills: new FormArray([
      new FormGroup({
        question: new FormControl("", [Validators.required])
        // response : new FormControl('')
      })
    ])
  });
  obj: any;

  constructor(private evalService: EvaluationService) {}
  addQR() {
    this.skills = this.tp.get("skills") as FormArray;
    this.skills.push(
      new FormGroup({
        question: new FormControl("", [Validators.required])
        // response : new FormControl('')
      })
    );
    console.log(this.tp.value);
  }

  ngOnInit() {
    console.log(this.object);
    console.log(this.tp);
  }

  isShown: boolean = false; // hidden by default

  // toggleShow() {

  // this.isShown = ! this.isShown;
  // this.skills.push(new FormControl(''));
  // }

  removeSkill(index: number) {
    this.skills = this.tp.get("skills") as FormArray;
    this.skills.removeAt(index);
  }

  enregistrer() {
    this.obj = {
      titre: this.object.titre,
      etat: this.object.etat,
      duree: this.object.duree,
      qr: this.tp.value.skills
    };
    this.evalService.addEvaluationQR(this.obj).subscribe(data => {
      console.log(this.obj);
    });
  }
  // ajoutEval() {
  //   this.evalService.addEvaluation(this.obj.value).subscribe(data => {
  //     console.log(this.obj.value);
  //   });
  //   console.log(this.object.value);
  //   console.log(this.obj.value);
  // }
  Return() {
    this.retour.emit("retour");
  }
}
