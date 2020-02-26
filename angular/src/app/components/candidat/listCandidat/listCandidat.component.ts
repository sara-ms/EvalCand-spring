import { Component, OnInit } from "@angular/core";
import { CoachService } from "../../../Services/coach.service";

@Component({
  selector: "app-listCandidat",
  templateUrl: "./listCandidat.component.html",
  styleUrls: ["./listCandidat.component.css"]
})
export class listCandidatComponent implements OnInit {
  constructor(private coachservice: CoachService) {}
  allCand;
  ngOnInit() {
    this.coachservice.afficheAllCand().subscribe(data => {
      this.allCand = data;
      console.log(this.allCand);
    });
  }
  // afficheCandidat() {

  // }
}
