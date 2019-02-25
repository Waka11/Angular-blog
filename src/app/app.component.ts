import { Component, Input, Output } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  arr = [1, 2, 3, 4, 88, 17, 53];
  active = 1;
  color = "yellow";

  onClick(Number: number) {
    this.active = Number;
    switch (Number) {
      case 1:
        this.color = "red";
        break;
      case 2:
        this.color = "darkorange";
        break;
      case 3:
        this.color = "blue";
        break;
      case 4:
        this.color = "purple";
        break;
      default:
      this.color = 'maroon'
      break;
    }
  }

  title = "cooprt";
}
