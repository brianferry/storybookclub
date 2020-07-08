import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { fetch } from "@nrwl/angular";
import { HttpClient } from "@angular/common/http";
import * as UiActions from "./wrapper.actions";
import * as actionTypes from "./wrapper.actionTypes";
import { map } from "rxjs/operators";
import { PieChartService } from "../../service/PieChartService";

@Injectable()
export class WrapperEffects {
  loadPieChart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.LOAD_PIECHART_DATA),
      fetch({
        run: (a: any) => {
          return this.pieChartService$.getPieChartData().pipe(
            map((response: any) =>
              UiActions.LoadPieChartSuccess({
                PieChartData: response,
              })
            )
          );
        },
        onError: (action, error) => {
          return UiActions.LoadPieChartError(error);
        },
      })
    )
  );

  loadNavigationData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.LOAD_NAVIGATION_DATA),
      fetch({
        run: (a: any) => {
          return this.pieChartService$.getNavigationData().pipe(
            map((response: any) =>
              UiActions.LoadNavigationDataSuccess({
                NavData: response,
              })
            )
          );
        },
        onError: (action, error) => {
          return UiActions.LoadNavigationDataError(error);
        },
      })
    )
  );

  loadNowReadingData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.LOAD_NOWREADING_DATA),
      fetch({
        run: (a: any) => {
          return this.pieChartService$.getNowReadingData().pipe(
            map((response: any) =>
              UiActions.LoadNowReadingSuccess({
                NowReading: response,
              })
            )
          );
        },
        onError: (action, error) => {
          return UiActions.LoadNowReadingError(error);
        },
      })
    )
  );

  loadTableColumnData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.LOAD_TABLECOLUMN_DATA),
      fetch({
        run: (a: any) => {
          return this.pieChartService$.getTableColumnData().pipe(
            map((response: any) =>
              UiActions.LoadTableColumnSuccess({
                ColumnDefinitions: response.field,
              })
            )
          );
        },
        onError: (action, error) => {
          return UiActions.LoadTableColumnError(error);
        },
      })
    )
  );

  loadTableRowData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.LOAD_TABLEROW_DATA),
      fetch({
        run: (a: any) => {
          return this.pieChartService$.getTableRowData().pipe(
            map((response: any) =>
              UiActions.LoadTableRowSuccess({
                RowData: response.rows,
              })
            )
          );
        },
        onError: (action, error) => {
          return UiActions.LoadTableRowError(error);
        },
      })
    )
  );

  loadUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.LOAD_USER_DATA),
      fetch({
        run: (a: any) => {
          return this.pieChartService$.getUserData().pipe(
            map((response: any) =>
              UiActions.LoadUserDataSuccess({
                User: response,
              })
            )
          );
        },
        onError: (action, error) => {
          return UiActions.LoadUserDataError(error);
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private http$: HttpClient,
    private pieChartService$: PieChartService
  ) {}
}
