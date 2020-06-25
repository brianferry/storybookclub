import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bookorg-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input() linkClass: string = "";
  @Input() linkHref: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
