import { createAction, props } from '@ngrx/store';
import { Credentials, User } from '../models';

export const LOGIN_START = createAction('[Auth] Login Start',
    props<Credentials>()
);
export const AUTHENTICATE_SUCCESS = createAction(
    '[Auth] Login Successful',
    props<{ user: User, redirect: boolean }>()
);
export const AUTHENTICATE_FAIL = createAction(
    '[Auth] Login Fail',
    props<{ error: string }>()
);
export const LOGOUT = createAction('[Auth] Logout');
export const SIGNUP_START = createAction('[Auth] Signup Start',
    props<Credentials>()
);
export const CLEAR_ERROR = createAction('[Auth] Clear Error');
export const SIGNUP = createAction('[Auth] Signup Start');
export const AUTO_LOGIN = createAction('[Auth] Auto Login');
