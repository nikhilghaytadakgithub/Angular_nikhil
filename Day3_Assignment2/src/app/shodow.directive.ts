import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appShodow]',
})
export class ShodowDirective implements OnInit {
  @Input() appShodow: string = "";
  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.el.nativeElement.style.textShadow =  this.appShodow;

  }
}