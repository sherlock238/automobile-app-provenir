import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

import { models } from "../models";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  models = models;
  constructor(private authService: AuthService, private router: Router) {}

  modelSelected() {
    window.alert("The model has been selected!");
  }

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
