import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { AjoutEvalComponent } from "./components/Evaluation/ajout-eval/ajout-eval.component";
import { CoachProfilComponent } from "./components/coach/coach-profil/coach-profil.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SidebarComponent } from "./components/Bars/sidebar/sidebar.component";
import { QRComponent } from "./components/Evaluation/typeEval/qr/qr.component";
import { ProjetComponent } from "./components/Evaluation/typeEval/projet/projet.component";

import { ajoutCandidatComponent } from "./components/candidat/ajoutCandidat/ajoutCandidat.component";
import { listCandidatComponent } from "./components/candidat/listCandidat/listCandidat.component";
import { StructureComponent } from "./components/structure/structure.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { EvalCandidatComponent } from "./components/Evaluation/eval-candidat/eval-candidat.component";
import { UpdatePasswordComponent } from "./components/Password-reset-Email/update-password/update-password.component";
import { SendEmailComponent } from "./components/Password-reset-Email/send-email/send-email.component";
import { ForgetPasswordComponent } from "./components/Password-reset-Email/forget-password/forget-password.component";
import { EvalTypeQRComponent } from "./components/Evaluation/eval-type-qr/eval-type-qr.component";
import { EditEvalComponent } from "./edit-eval/edit-eval.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "sign-in",
    pathMatch: "full"
  },
  { path: "sign-in", component: SignInComponent },
  { path: "eval-candidat", component: EvalCandidatComponent },
  { path: "forget-password/:id", component: ForgetPasswordComponent },
  { path: "sendEmail", component: SendEmailComponent },
  { path: "evalQR", component: EvalTypeQRComponent },
  {
    path: "",
    component: StructureComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "ajouter-Eval", component: AjoutEvalComponent },
      { path: "ajout-Candidat", component: ajoutCandidatComponent },
      { path: "coach-profile", component: CoachProfilComponent },
      { path: "list-candidat", component: listCandidatComponent },
      { path: "QR", component: QRComponent },
      { path: "update-password", component: UpdatePasswordComponent },
      { path: "projet", component: ProjetComponent },
      { path: "edit", component: EditEvalComponent }

    ]
  }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
