import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  login = "";
  password = "";

  @Output() onAddVerif = new EventEmitter<{
    login: string;
    password: string;
  }>();

  AddVerif(){
    this.onAddVerif.emit({
      login: this.login,
      password: this.password
    });
    this.login = '';
    this.password = '';
  }

  constructor() {}

  ngOnInit() {}
}
