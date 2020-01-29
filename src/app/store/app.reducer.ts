import { ActionReducerMap } from '@ngrx/store';
import * as fromSite from '../site/store/site.reducer';

export interface AppState {
    site: fromSite.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    site: fromSite.siteReducer,
};
