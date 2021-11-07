import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { MDBBootstrapModule } from "angular-bootstrap-md";

// import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from "./app.routing";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatIconModule,
  MatChipsModule,
  MatToolbarModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule
} from "@angular/material";

import { AppComponent } from "./app.component";

import { QRComponent } from "./components/Evaluation/typeEval/qr/qr.component";
import { CoachProfilComponent as CoachProfilComponent2 } from "./components/coach/coach-profil/coach-profil.component";
import { FooterComponent } from "./components/Bars/footer/footer.component";
import { NavbarComponent } from "./components/Bars/navbar/navbar.component";
import { SidebarComponent } from "./components/Bars/sidebar/sidebar.component";
import { DashboardComponent as DashboardComponent2 } from "./components/dashboard/dashboard.component";
import { listCandidatComponent as listCandidatComponent2 } from "./components/candidat/listCandidat/listCandidat.component";
import { ajoutCandidatComponent as ajoutCandidatComponent2 } from "./components/candidat/ajoutCandidat/ajoutCandidat.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { AjoutEvalComponent as AjoutEvalComponent2 } from "./components/Evaluation/ajout-eval/ajout-eval.component";
import { StructureComponent } from "./components/structure/structure.component";
import { ProjetComponent } from "./components/Evaluation/typeEval/projet/projet.component";
import { CodageComponent } from "./components/Evaluation/typeEval/codage/codage.component";
import { EvalCandidatComponent } from "./components/Evaluation/eval-candidat/eval-candidat.component";
import { UpdatePasswordComponent } from "./components/Password-reset-Email/update-password/update-password.component";
import { SendEmailComponent } from "./components/Password-reset-Email/send-email/send-email.component";
import { ForgetPasswordComponent } from "./components/Password-reset-Email/forget-password/forget-password.component";
import { EvalTypeQRComponent } from "./components/Evaluation/eval-type-qr/eval-type-qr.component";
import { EditEvalComponent } from "./edit-eval/edit-eval.component";
import { AjoutEvalComponent } from "./components/structure/ajout-eval/ajout-eval.component";
import { CoachProfilComponent } from "./components/structure/coach-profil/coach-profil.component";
import { DashboardComponent } from "./components/structure/dashboard/dashboard.component";
import { listCandidatComponent } from "./components/structure/listCandidat/listCandidat.component";
import { ajoutCandidatComponent } from "./components/structure/ajoutCandidat/ajoutCandidat.component";
import { QcmComponent } from "./components/Evaluation/typeEval/qcm/qcm.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    // FlexLayoutModule,
    MatToolbarModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    QRComponent,
    AjoutEvalComponent,
    AjoutEvalComponent2,
    CoachProfilComponent,
    CoachProfilComponent2,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    DashboardComponent2,
    listCandidatComponent,
    listCandidatComponent2,
    QRComponent,
    ajoutCandidatComponent,
    ajoutCandidatComponent2,
    SignInComponent,
    ProjetComponent,
    CodageComponent,
    StructureComponent,
    CodageComponent,
    EvalCandidatComponent,
    UpdatePasswordComponent,
    SendEmailComponent,
    ForgetPasswordComponent,
    EvalTypeQRComponent,
    EditEvalComponent,
    QcmComponent
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
