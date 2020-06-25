import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bookorg-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() cssClass: string;
  @Input() imgAlt: string;
  @Input() border: boolean;
  @Input() rounded: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
