import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bookorg-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() placeholder: string = "";
  @Input() rounded: boolean = false;
  @Input() disabled: boolean = false;
  @Input() password: boolean = false;
  @Input() linkClass: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
