import { Component, OnInit, Input } from '@angular/core';
import { NowReadingModel } from 'libs/ui/src/models/NowReadingModel';

@Component({
  selector: 'boNowReading',
  templateUrl: './now-reading.component.html',
  styleUrls: ['./now-reading.component.scss']
})
export class NowReadingComponent implements OnInit {

  @Input() NowReading: NowReadingModel;

  constructor() { }

  ngOnInit(): void {
  }

}
