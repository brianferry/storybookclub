import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bookorg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardTitle: string = "This is a card title!"; 
  @Input() cardImg: string = "";
  @Input() cardImgAlt: string;
  @Input() cardImgBorder: boolean = false;
  @Input() cardImgRounded: boolean = false;
  @Input() cardImgEnabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
