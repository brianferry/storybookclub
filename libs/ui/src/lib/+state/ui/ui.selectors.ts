import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UI_FEATURE_KEY, UiState, UiPartialState, uiAdapter } from './ui.reducer';
import { PieChartDataModel } from '../../../models/PieChartModel';

// Lookup the 'Ui' feature state managed by NgRx
export const getUiState = createFeatureSelector<UiPartialState, UiState>(
  UI_FEATURE_KEY
);

const { selectAll, selectEntities } = uiAdapter.getSelectors();

export const getUiLoaded = createSelector(
  getUiState,
  (state: UiState) => state.loaded
);

export const getUiError = createSelector(
  getUiState,
  (state: UiState) => state.error
);

export const getAllUi = createSelector(getUiState, (state: UiState) =>
  selectAll(state)
);

export const getUiEntities = createSelector(getUiState, (state: UiState) =>
  selectEntities(state)
);

export const getPieChartData = createSelector(getUiState,
  (state: UiState) => state.PieChartData
);