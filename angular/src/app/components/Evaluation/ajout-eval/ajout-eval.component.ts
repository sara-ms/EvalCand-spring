import { Component, OnInit } from "@angular/core";
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete
} from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import {
  FormControl,
  Validators,
  FormGroup,
  FormControlName
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { EvaluationService } from '../../../Services/evaluation.service';

@Component({
  selector: "app-ajout-eval",
  templateUrl: "./ajout-eval.component.html",
  styleUrls: ["./ajout-eval.component.css"]
})
export class AjoutEvalComponent implements OnInit {

  evalForm: FormGroup;
  Types = ["qr", "Projet", "QCM"];
  chosenType: string;
  evaluationToEdit: any;
  isInitialized: boolean = false;

  constructor(private router: Router,  private evalservice: EvaluationService) {
    this.chosenType = "";
  }

  ngOnInit(): void {

    this.evaluationToEdit = this.evalservice.getEvaluation();
    this.evalservice.setEvaluation(null);

    this.evalForm = new FormGroup({
      titre: new FormControl(this.evaluationToEdit != null ? this.evaluationToEdit.titre : "", [Validators.required]),
      etat: new FormControl(this.evaluationToEdit != null ? this.evaluationToEdit.etat : "Activée", [Validators.required]),
      duree: new FormControl(this.evaluationToEdit != null ? this.evaluationToEdit.duree : 0, [Validators.required])
    });
  }

  onChange(event) {
    this.chosenType = event.value;
  }
  getRetour(event) {
    console.log(event);
    this.chosenType = "";
  }
  Save(evaluation){
    this.evalservice.Save(evaluation).subscribe(data => {
      console.log(data);
  
});
  }
}

