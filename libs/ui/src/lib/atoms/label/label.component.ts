import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'input-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LabelComponent implements OnInit {

  @Input() linkClass: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
