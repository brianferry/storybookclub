import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NavBarModel } from 'libs/ui/src/models/NavBarModel';
import { User } from 'libs/ui/src/models/UserModel';
@Component({
  selector: 'bo-Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Input() NavItems : NavBarModel[];


  @Input() User: User;

  private _navLabelCss = "nav-link-title";
  private _navLinkCss = 'nav-link';

  constructor() { 
  }

  ngOnInit(): void {

  }

}
