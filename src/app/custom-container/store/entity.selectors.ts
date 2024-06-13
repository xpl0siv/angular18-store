import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./entity-reducer.reducer";

export const selectEntityState = createFeatureSelector<State>("entityReducer");

export const selectEntityLoading = createSelector(
  selectEntityState,
  (state) => state.loading
);

export const selectEntityData = createSelector(
  selectEntityState,
  (state) => state.data
);
