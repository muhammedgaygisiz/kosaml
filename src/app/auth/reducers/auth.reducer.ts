import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';
// Correct here
import { User } from '../models';


// Correct here
export const authFeatureKey = 'auth';

// Correct here
export interface State {
    user: User;
    authError: string;
}

// Correct here
const initialState: State = {
    user: null,
    authError: null,
};

export const reducer = createReducer(
    initialState,
    on(AuthActions.startLogin, AuthActions.startSignUp, state => ({ ...state, authError: null })),
    on(AuthActions.authenticationSucceeded, (state, { user }) => ({ ...state, authError: null, user: { ...user } })),
    on(AuthActions.logout, state => ({ ...state, user: null })),
    on(AuthActions.authenticationFailed, (state, { error }) => ({ ...state, authError: error }))
);
