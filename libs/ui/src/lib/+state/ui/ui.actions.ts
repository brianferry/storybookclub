import { createAction, props } from '@ngrx/store';
import { UiEntity } from './ui.models';
import { PieChartDataModel } from 'libs/ui/src/models/PieChartModel';

export const loadUi = createAction('[Ui] Load Ui');

export const loadUiSuccess = createAction(
  '[Ui] Load Ui Success',
  props<{ ui: UiEntity[] }>()
);

export const loadUiFailure = createAction(
  '[Ui] Load Ui Failure',
  props<{ error: any }>()
);

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] reset');


export const LoadPieChartData 
  = createAction(
                  '[Pie Chart Component] Load Data Requested'
                  ,props<{PieChartData: PieChartDataModel[]}>() 
                );