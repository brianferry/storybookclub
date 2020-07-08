import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'boHeading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements AfterViewInit {

  @Input() text: string;
  @Input() level: number;
  @Input() cssClass: string;

  constructor() { }

  ngAfterViewInit(): void {
  }

}
