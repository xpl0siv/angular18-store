import { createReducer, on } from "@ngrx/store";
import { EntityActions } from "./entity.actions";
import { Entity } from "../data-access/entity.interface";

export const entityReducerFeatureKey = "entityReducer";

export interface State {
  loading: boolean;
  data: Entity[];
  error: any;
}

export const initialState: Partial<State> = {
  loading: true,
};

export const reducer = createReducer(
  initialState,
  on(EntityActions.manageEntitys, (state) => ({
    ...state,
    loading: false,
  })),
  on(EntityActions.manageEntitysSuccess, (state, action) => ({
    ...state,
    loading: false,
    data: action.data,
  })),
  on(EntityActions.manageEntitysFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }))
);
