import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appDhover]"
})
export class DhoverDirective implements OnInit {
  constructor(private element: ElementRef, private Render: Renderer2) {
    console.log(element);
    // this.element.nativeElement.style.backgroundColor = 'yellow';
  }
  
  @Input()hoverColor:string = 'white';
  @Input()defaultBg:string = 'red';

  @HostListener('mouseenter') MouseEnter(){
    this.Render.setStyle(this.element.nativeElement, 'background-color', this.hoverColor);
    this.Render.addClass(this.element.nativeElement, 'testClass2');
    this.Render.removeClass(this.element.nativeElement, 'testClass');
  }
  @HostListener('mouseleave') MouseLeave(){
    this.Render.setStyle(this.element.nativeElement, 'background-color', this.defaultBg);
    this.Render.setStyle(this.element.nativeElement, 'cursor', 'pointer');
    this.Render.addClass(this.element.nativeElement, 'testClass');
    this.Render.removeClass(this.element.nativeElement, 'testClass2');
  }
  ngOnInit(){
    this.Render.setStyle(this.element.nativeElement, 'background-color', this.defaultBg);
    this.Render.setStyle(this.element.nativeElement, 'cursor', 'pointer');
    this.Render.addClass(this.element.nativeElement, 'testClass');
  }
}