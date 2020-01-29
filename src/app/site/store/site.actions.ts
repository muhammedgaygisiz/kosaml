import { Action } from '@ngrx/store';

export const TOGGLE_PROJECT_BAR = '[Site] Toggle Project Bar';

export class ToggleProjectBar implements Action {
    readonly type = TOGGLE_PROJECT_BAR;
}

export type SiteActions =
    | ToggleProjectBar;
