import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-addpost",
  templateUrl: "./addpost.component.html",
  styleUrls: ["./addpost.component.css"]
})
export class AddpostComponent implements OnInit {
  // PostArray: [
  //   { title: string; post: string; author: string; key: number }
  // ] = [];

  title = "";
  post = "";
  author = "";
  key = Date.now();

  @Output() onAddPost = new EventEmitter<{
    title: string;
    post: string;
    author: string;
    key: number;
  }>();

  AddPost() {
    this.onAddPost.emit({
      title: this.title,
      post: this.post,
      author: this.author,
      key: this.key
    });
    this.title = "";
    this.post = "";
    this.author = "";
    this.key = Date.now();
  }

  // addPost(event: Event) {
  //   let object = {
  //     title: this.title,
  //     post: this.post,
  //     author: this.author,
  //     key: this.key
  //   };
  //   this.PostArray.push(object);
  //   this.PostArray.sort(function(a , b){
  //     if(a.key > b.key){
  //       return 1;
  //     }
  //     if(a.key < b.key){
  //       return -1;
  //     }
  //   })
  //   console.log(this.key);
  //   this.title = "";
  //   this.post = "";
  //   this.author = "";
  //   this.key = Date.now();
  // }

  constructor() {}

  ngOnInit() {}
}
