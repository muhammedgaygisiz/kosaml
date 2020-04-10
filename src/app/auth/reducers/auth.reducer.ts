import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { fromApp } from 'src/app/store';
import { AuthActions } from '../actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  authError: string;
}

export interface State extends fromApp.State {
  [authFeatureKey]: AuthState;
}

// Correct here
const initialState: AuthState = {
  authError: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.startLogin, AuthActions.startSignUp, state => ({ ...state, authError: null })),
  on(AuthActions.logout, state => ({ ...state, user: null })),
  on(AuthActions.authenticationFailed, (state, { error }) => ({ ...state, authError: error })),
);

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const selectAuthState = createFeatureSelector<State, AuthState>(
  authFeatureKey
);

export const selectAuthError = createSelector(
  selectAuthState,
  state => state.authError
)