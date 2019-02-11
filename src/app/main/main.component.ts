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

  PostArray: [{ title: string; post: string; author: string; key:number }] = [];

  title = '';
  post = '';
  author = '';
  key = Date.now();

  addPost(event: Event) {
    let object = { title: this.title, post: this.post, author: this.author, key: this.key };
    this.PostArray.push(object);
    console.log(this.key);
    this.title = null;
    this.post = null;
    this.author = null;
    this.key = Date.now();
  }

  constructor() {}

  ngOnInit() {}
}
