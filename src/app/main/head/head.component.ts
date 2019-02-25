import {
  Component,
  OnInit,
  Input,
  DoCheck,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from "@angular/core";

@Component({
  selector: "app-head",
  templateUrl: "./head.component.html",
  styleUrls: ["./head.component.css"]
})
export class HeadComponent
  implements
    OnInit
    //,
    // DoCheck,
    // OnChanges,
    // AfterContentInit,
    // AfterContentChecked,
    // AfterViewInit,
    // AfterViewChecked,
    // OnDestroy 
    {
  @Input() Post: [
    { title: string; post: string; author: string; key: number }
  ] = [{ title: "TEST", post: "TEST2", author: "TEST3", key: Date.now() }];

  constructor() {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("NG ON INIT");
  }

  // ngDoCheck() {
  //   console.log("NG DO CHECK");
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("NG ON CHANGES", changes);
  // }

  // ngAfterContentInit() {
  //   console.log("NG AFTER CONTENT INIT");
  // }

  // ngAfterContentChecked() {
  //   console.log("NG AFTER CONTENT CHECKED");
  // }

  // ngAfterViewInit() {
  //   console.log("NG AFTER VIEW INIT");
  // }

  // ngAfterViewChecked() {
  //   console.log("NG AFTER VIEW CHECKED");
  // }

  // ngOnDestroy() {
  //   console.log("NG ON DESTROY");
  // }
}
