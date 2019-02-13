import { Component, OnInit, Input} from "@angular/core";

@Component({
  selector: "app-head",
  templateUrl: "./head.component.html",
  styleUrls: ["./head.component.css"]
})
export class HeadComponent implements OnInit {
  @Input() Post: [{ title: string; post: string; author: string }] = [];

  
  constructor() {}

  ngOnInit() {}
}
