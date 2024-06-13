import { createReducer, on } from '@ngrx/store';
import { EntityActions } from './entity.actions';

export const entityReducerFeatureKey = 'entityReducer';

export interface State {
  loading: boolean;
}

export const initialState: State = {
  loading: true,
};

export const reducer = createReducer(
  initialState,
  on(EntityActions.manageEntitys, (state) => ({
    ...state,
    loading: true,
  })),
  on(EntityActions.manageEntitysSuccess, (state) => ({
    ...state,
    loading: false,
  })),
  on(EntityActions.manageEntitysFailure, (state) => ({
    ...state,
    loading: false,
  }))
);
