import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormArray, FormGroup, FormControl, Validators } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { EvaluationService } from "../../../../Services/evaluation.service";

@Component({
  selector: "app-projet",
  templateUrl: "./projet.component.html",
  styleUrls: ["./projet.component.css"]
})
export class ProjetComponent implements OnInit {
  projet: FormArray;
  obj: any;
  @Input() object: any;
  @Output() retour = new EventEmitter<string>();
  tp = new FormGroup({
    projet: new FormArray([
      new FormGroup({
        enonce: new FormControl("", [Validators.required]),
        lienGit: new FormControl("", [Validators.required])
      })
    ])
  });

  constructor(private evalService: EvaluationService) {}
  addPrj() {
    this.projet = this.tp.get("projet") as FormArray;
    this.projet.push(
      new FormGroup({
        enonce: new FormControl("", [Validators.required]),
        lienGit: new FormControl("", [Validators.required])
      })
    );
    console.log(this.tp.value);
  }
  ngOnInit() {}
  removePrj(index: number) {
    this.projet = this.tp.get("projet") as FormArray;
    this.projet.removeAt(index);
  }
  enregistrer() {
    this.obj = {
      titre: this.object.titre,
      etat: this.object.etat,
      duree: this.object.duree,
      prj: this.tp.value.projet
    };
    this.evalService.addEvaluationPrj(this.obj).subscribe(data => {
      console.log(this.obj);
    });
  }
  Return() {
    this.retour.emit("retour");
  }
}
