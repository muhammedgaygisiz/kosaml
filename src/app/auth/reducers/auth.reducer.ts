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
    loading: boolean;
}

// Correct here
const initialState: State = {
    user: null,
    authError: null,
    loading: false,
};

export const reducer = createReducer(
    initialState,
    on(AuthActions.startLogin, AuthActions.startSignUp, state => ({ ...state, authError: null, loading: true })),
    on(AuthActions.authenticationSucceeded, (state, { user }) => {
        return {
            ...state,
            authError: null,
            user: { ...user },
            loading: false,
        };
    }),
    on(AuthActions.logout, state => ({ ...state, user: null })),
    on(AuthActions.authenticationFailed, (state, { error }) => ({ ...state, authError: error }))
);
