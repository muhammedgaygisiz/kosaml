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

export function authReducer(
    state = initialState,
    action: AuthActions.AuthActions
) {
    switch (action.type) {
        case AuthActions.LOGIN_START:
        case AuthActions.SIGNUP_START:
            return {
                ...state,
                authError: null,
                loading: true,
            };

        case AuthActions.AUTHENTICATE_SUCCESS:
            const user = new User(
                action.payload.email,
                action.payload.userId,
                action.payload.token,
                action.payload.expirationDate
            );

            return {
                ...state,
                authError: null,
                user,
                loading: false,
            };

        case AuthActions.LOGOUT:
            return {
                ...state,
                user: null,
            };

        case AuthActions.AUTHENTICATE_FAIL:
            return {
                ...state,
                user: null,
                authError: action.payload,
                loading: false,
            };

        default:
            return state;
    }
}
