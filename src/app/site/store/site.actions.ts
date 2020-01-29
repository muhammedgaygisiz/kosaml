import { Action } from '@ngrx/store';

export const TOGGLE_PROJECT_BAR = '[Site] Toggle Project Bar';
export const TOGGLE_TOOL_BAR = '[Site] Toggle Tool Bar';

export class ToggleProjectBar implements Action {
    readonly type = TOGGLE_PROJECT_BAR;
}

export class ToggleToolBar implements Action {
    readonly type = TOGGLE_TOOL_BAR;
}

export type SiteActions =
    | ToggleProjectBar
    | ToggleToolBar;
