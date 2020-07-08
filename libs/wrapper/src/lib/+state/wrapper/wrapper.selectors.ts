import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WRAPPER_FEATURE_KEY, WrapperState, WrapperPartialState } from './wrapper.reducer';

// Lookup the 'Ui' feature state managed by NgRx
export const getUiState = createFeatureSelector<WrapperPartialState, WrapperState>(
  WRAPPER_FEATURE_KEY
);

export const getPieChartData = createSelector(getUiState,
  (state: WrapperState) => state.PieChartData
);

export const getNavigationData = createSelector(getUiState,
  (state: WrapperState) => state.NavData
)

export const getUserData = createSelector(getUiState,
  (state: WrapperState) => state.User
)

export const getNowReadingData = createSelector(getUiState,
  (state: WrapperState) => state.NowReading
)

export const getTableData = createSelector(getUiState,
  (state: WrapperState) => state.TableData
)

export const getTableColumnData = createSelector(getUiState,
  (state: WrapperState) => state.ColumnDefinitions
)

export const getTableRowData = createSelector(getUiState,
  (state: WrapperState) => state.RowData
)