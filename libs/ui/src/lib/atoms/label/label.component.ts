import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'input-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LabelComponent implements OnInit {

  @Input() text: string = "Text Content!";

  constructor() { }

  ngOnInit(): void {
  }

}
