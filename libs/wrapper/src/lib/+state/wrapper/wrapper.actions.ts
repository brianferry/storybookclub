import { createAction, props } from '@ngrx/store';
import { PieChartModel } from 'libs/ui/src/models/PieChartModel';
import { NavBarModel } from 'libs/ui/src/models/NavBarModel';
import { User } from 'libs/ui/src/models/UserModel';
import { NowReadingModel } from 'libs/ui/src/models/NowReadingModel';
import { TableDataModel } from 'libs/ui/src/models/TableModel';
import * as actionTypes from './wrapper.actionTypes';

//Request Actions

export const LoadPieChartData 
  = createAction(
    actionTypes.LOAD_PIECHART_DATA
                );

export const LoadNavigationData 
    = createAction(
      actionTypes.LOAD_NAVIGATION_DATA
    )

export const LoadUserData
      = createAction(
        actionTypes.LOAD_USER_DATA
      )
  
export const LoadNowReadingData
      = createAction(
        actionTypes.LOAD_NOWREADING_DATA
      )

export const LoadTableColumnData
      = createAction(
        actionTypes.LOAD_TABLEROW_DATA
      )

export const LoadTableRowData
      = createAction(
        actionTypes.LOAD_TABLECOLUMN_DATA
      )

//Success Actions

export const LoadPieChartSuccess = createAction(
  actionTypes.LOAD_PIECHART_DATA_SUCCESS
  ,props<{PieChartData: PieChartModel}>() 
)

export const LoadNavigationDataSuccess = createAction(
  actionTypes.LOAD_NAVIGATION_DATA_SUCCESS
  ,props<{NavData: NavBarModel[]}>() 
)

export const LoadUserDataSuccess = createAction(
  actionTypes.LOAD_USER_DATA_SUCCESS,
props<{User: User}>() 
)

export const LoadNowReadingSuccess = createAction(
  actionTypes.LOAD_NOWREADING_DATA_SUCCESS,
  props<{NowReading: NowReadingModel}>()
)

export const LoadTableRowSuccess = createAction(
  actionTypes.LOAD_TABLEROW_DATA_SUCCESS,
  props<{RowData: any}>()
)

export const LoadTableColumnSuccess = createAction(
  actionTypes.LOAD_TABLECOLUMN_DATA_SUCCESS,
  props<{ColumnDefinitions: any}>() 
)

// Error Actions

export const LoadPieChartError = createAction(
  actionTypes.LOAD_PIECHART_DATA_ERROR
  ,props<{error: any}>() 
)

export const LoadNavigationDataError = createAction(
  actionTypes.LOAD_NAVIGATION_DATA_ERROR
  ,props<{error: any}>() 
)

export const LoadUserDataError = createAction(
  actionTypes.LOAD_USER_DATA_ERROR
  ,props<{error: any}>() 
)

export const LoadNowReadingError = createAction(
  actionTypes.LOAD_NOWREADING_DATA_ERROR
  ,props<{error: any}>() 
)

export const LoadTableRowError = createAction(
  actionTypes.LOAD_TABLEROW_DATA_ERROR
  ,props<{error: any}>() 
)

export const LoadTableColumnError = createAction(
  actionTypes.LOAD_TABLECOLUMN_DATA_ERROR
  ,props<{error: any}>() 
)


