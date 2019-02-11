import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  // PostArray: [{ title: string; post: string; author: string }] = [
  //   { title: "TestPost", post: " Testing blog", author: "Bill" }
  // ];

  PostArray: [{ title: string; post: string; author: string }] = [];

  addPost(event: Event){
    let object = {title: this.title, post: this.post, author:this.author};
    this.PostArray.push(object);
  }

  title = null;
  post = null;
  author = null;

  constructor() {}

  ngOnInit() {}
}
