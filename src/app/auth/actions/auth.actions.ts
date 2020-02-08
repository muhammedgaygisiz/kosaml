import { createAction, props } from '@ngrx/store';
import { Credentials, User } from '../models';

export const startLogin = createAction('[Auth] Login Start',
    props<Credentials>()
);

export const authenticationSucceeded = createAction(
    '[Auth] Login Successful',
    props<{ user: User, redirect: boolean }>()
);

export const authenticationFailed = createAction(
    '[Auth] Login Fail',
    props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');

export const startSignUp = createAction('[Auth] Signup Start',
    props<Credentials>()
);

export const clearError = createAction('[Auth] Clear Error');


export const autoLogin = createAction('[Auth] Auto Login');

