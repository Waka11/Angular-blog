import { Component, OnInit, Input} from "@angular/core";

@Component({
  selector: "app-head",
  templateUrl: "./head.component.html",
  styleUrls: ["./head.component.css"]
})
export class HeadComponent implements OnInit {
  @Input() Post: [{ title: string; post: string; author: string }] = [
    { title: "TestPost", post: " Testing blog", author: "Bill" }
  ];

  constructor() {}

  ngOnInit() {}
}
