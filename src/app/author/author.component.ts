import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  UserArray: [{login: string, password: string}] = [];
  
  UpdateUserArray(UserArr: {login:string, password: string}){
    this.UserArray.push(UserArr);
  }
  constructor() { }

  ngOnInit() {
  }

}
