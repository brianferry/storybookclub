import { Component, OnInit } from '@angular/core';
import * as actionTypes from '../+state/wrapper/wrapper.actionTypes';
import * as fromRoot from '../+state/wrapper/wrapper.selectors';
import { Observable } from 'rxjs';
import { NavBarModel } from 'libs/ui/src/models/NavBarModel';
import { Store } from '@ngrx/store';
import { WrapperPartialState } from '../+state/wrapper/wrapper.reducer';
import { PieChartModel } from 'libs/ui/src/models/PieChartModel';
import { NowReadingModel } from 'libs/ui/src/models/NowReadingModel';
import { User } from 'libs/ui/src/models/UserModel';

@Component({
  selector: 'bookorg-home-page-wrapper',
  templateUrl: './home-page-wrapper.component.html',
  styleUrls: ['./home-page-wrapper.component.scss']
})
export class HomePageWrapperComponent implements OnInit {

  public Title: string = "Home Page";

  public NavBar$: Observable<NavBarModel[]> = this.store.select(fromRoot.getNavigationData);
  public User$: Observable<User> = this.store.select(fromRoot.getUserData);
  public NowReading$: Observable<NowReadingModel> = this.store.select(fromRoot.getNowReadingData);

  public ColumnDefs$: Observable<any> = this.store.select(fromRoot.getTableColumnData);
  public RowData$: Observable<any> = this.store.select(fromRoot.getTableRowData);

  public ChartData$: Observable<PieChartModel> = this.store.select(fromRoot.getPieChartData);

  constructor(private store: Store<WrapperPartialState>) { 
    this.store.dispatch({type: actionTypes.LOAD_NAVIGATION_DATA});
    this.store.dispatch({type: actionTypes.LOAD_USER_DATA});
    this.store.dispatch({type: actionTypes.LOAD_NOWREADING_DATA});
    this.store.dispatch({type: actionTypes.LOAD_TABLEROW_DATA});
    this.store.dispatch({type: actionTypes.LOAD_TABLECOLUMN_DATA});
    this.store.dispatch({type: actionTypes.LOAD_PIECHART_DATA});
  }

  ngOnInit(): void {
  }

}
