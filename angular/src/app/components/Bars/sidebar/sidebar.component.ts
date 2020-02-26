import { Component, OnInit } from "@angular/core";
import { CoachService } from "../../../Services/coach.service";
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "design_app",
    class: ""
  },

  {
    path: "/ajouter-Eval",
    title: "ajout Evaluation",
    icon: "users_single-02",
    class: ""
  },
  {
    path: "/ajout-Candidat",
    title: "ajout Candidat",
    icon: "users_single-02",
    class: ""
  },
  // {
  //   path: "/coach-profile",
  //   title: "Coach profile",
  //   icon: "design_bullet-list-67",
  //   class: ""
  // },
  {
    path: "/list-candidat",
    title: "List Candidats",
    icon: "design_bullet-list-67",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  tokenValue: any;
  invalidLogin = false;
  constructor(private cService: CoachService) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
