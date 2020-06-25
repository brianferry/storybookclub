import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as UiActions from './ui.actions';
import { UiEntity } from './ui.models';
import { PieChartDataModel } from '../../../models/PieChartModel';

export const UI_FEATURE_KEY = 'ui';

export interface UiState extends EntityState<UiEntity> {
  loaded: boolean; // has the Ui list been loaded
  error?: string | null; // last none error (if any),
  PieChartData?: PieChartDataModel[]
}

export interface UiPartialState {
  readonly [UI_FEATURE_KEY]: UiState;
}

export const uiAdapter: EntityAdapter<UiEntity> = createEntityAdapter<
  UiEntity
>();

export const initialState: UiState = uiAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  PieChartData: [
      {
        "name": "Altissia",
        "value": 10
      },
      {
        "name": "Terra",
        "value": 20
      },
      {
        "name": "Zanarkand",
        "value": 30
      },
        {
        "name": "Midgar",
        "value": 20
      }
    ]
  });

const uiReducer = createReducer(
  initialState,
  on(UiActions.loadUi, (state) => ({ ...state, loaded: false, error: null })),
  on(UiActions.loadUiSuccess, (state, { ui }) =>
    uiAdapter.addAll(ui, { ...state, loaded: true })
  ),
  on(UiActions.loadUiFailure, (state, { error }) => ({ ...state, error })),
  on(UiActions.LoadPieChartData, (state, { PieChartData }) => ({...state, PieChartData}))
);

export function reducer(state: UiState | undefined, action: Action) {
  return uiReducer(state, action);
}
