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
    on(AuthActions.LOGIN_START, AuthActions.SIGNUP_START, state => ({ ...state, authError: null, loading: true })),
    on(AuthActions.AUTHENTICATE_SUCCESS, (state, { user }) => {
        return {
            ...state,
            authError: null,
            user,
            loading: false,
        };
    }),
    on(AuthActions.LOGOUT, state => ({ ...state, user: null })),
    on(AuthActions.AUTHENTICATE_FAIL, (state, { error }) => ({ ...state, authError: error }))
);
