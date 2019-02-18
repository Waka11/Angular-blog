import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-login-list",
  templateUrl: "./login-list.component.html",
  styleUrls: ["./login-list.component.css"]
})
export class LoginListComponent implements OnInit {
  @Input() User: [{ login: string; password: string }] = [
    { login: "1234", password: "4321" }
  ];

  correctLogin = "1234";
  correctPassword = "4321";

  classname = "";

  constructor() {}

  ngOnInit() {
    if (
      (this.User.length >= 1 && this.User.login !== this.correctLogin) ||
      this.User.password !== this.correctPassword
    ) {
      this.classname = "false";
    } else {
      this.classname = "true";
    }
  }
}
