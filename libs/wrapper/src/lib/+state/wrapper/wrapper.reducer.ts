import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as UiActions from './wrapper.actions';
import { WrapperEntity } from './wrapper.models';
import { NavBarModel } from 'libs/ui/src/models/NavBarModel';
import { User } from 'libs/ui/src/models/UserModel';
import { NowReadingModel } from 'libs/ui/src/models/NowReadingModel';
import { TableDataModel } from 'libs/ui/src/models/TableModel';
import { PieChartModel } from 'libs/ui/src/models/PieChartModel';

export const WRAPPER_FEATURE_KEY = 'wrapper';

export interface WrapperState extends EntityState<WrapperEntity> {
  loaded: boolean; // has the Ui list been loaded
  error?: string | null; // last none error (if any),
  PieChartData?: PieChartModel,
  NavData?: NavBarModel[],
  User?: User,
  NowReading?: NowReadingModel,
  TableData?: TableDataModel,
  ColumnDefinitions?: any,
  RowData?: any
}

export interface WrapperPartialState {
  readonly [WRAPPER_FEATURE_KEY]: WrapperState;
}

export const wrapperAdapter: EntityAdapter<WrapperEntity> = createEntityAdapter<
WrapperEntity
>();

export const initialState: WrapperState = wrapperAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  });

const uiReducer = createReducer(
  initialState,
  on(UiActions.LoadPieChartData, (state) => ({...state, PieChartData: {data: [], colorScheme: []}})),
  on(UiActions.LoadPieChartSuccess, (state, { PieChartData }) => ({...state, PieChartData})),
  on(UiActions.LoadPieChartError, (state, { error }) => ({...state, error})),

  on(UiActions.LoadNavigationData, (state) => ({...state, NavData: null})),
  on(UiActions.LoadNavigationDataSuccess, (state, { NavData }) => ({...state, NavData})),
  on(UiActions.LoadNavigationDataError, (state, { error }) => ({...state, error})),
  
  on(UiActions.LoadUserData, (state) => ({...state, User: null})),
  on(UiActions.LoadUserDataSuccess, (state, { User }) => ({...state, User})),
  on(UiActions.LoadUserDataError, (state, { error }) => ({...state, error})),
  
  on(UiActions.LoadNowReadingData, (state) => ({...state, NowReading: null})),
  on(UiActions.LoadNowReadingSuccess, (state, { NowReading }) => ({...state, NowReading})),
  on(UiActions.LoadNowReadingError, (state, { error }) => ({...state, error})),
  
  on(UiActions.LoadTableColumnData, (state) => ({...state, ColumnDefinitions: null})),
  on(UiActions.LoadTableColumnSuccess, (state, { ColumnDefinitions }) => ({...state, ColumnDefinitions})),
  on(UiActions.LoadTableColumnError, (state, { error }) => ({...state, error})),

  on(UiActions.LoadTableRowData, (state) => ({...state, RowData: null})),
  on(UiActions.LoadTableRowSuccess, (state, { RowData }) => ({...state, RowData})),
  on(UiActions.LoadTableRowError, (state, { error }) => ({...state, error})),
);

export function reducer(state: WrapperState | undefined, action: Action) {
  return uiReducer(state, action);
}
