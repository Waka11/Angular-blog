import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  PostArray: [{ title: string; post: string; author: string, key:number }] = [{ title: 'TEST', post: 'TEST2', author:'TEST3', key: Date.now()  }];

  updateList(PostArr: { title: string, post: string, author: string, key: number }) {
    this.PostArray.push(PostArr)
  }

  DeleteItem() {
    // this.PostArray = [];
  }
  
  constructor() {}

  ngOnInit() {}
}
