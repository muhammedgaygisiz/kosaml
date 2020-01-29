import * as SiteActions from './site.actions';

export interface State {
    isProjectBarOpen: boolean;
    isToolBarOpen: boolean;
}

const initialState: State = {
    isProjectBarOpen: false,
    isToolBarOpen: false,
};

export function siteReducer(
    state: State = initialState,
    action: SiteActions.SiteActions
) {
    switch (action.type) {
        case SiteActions.TOGGLE_PROJECT_BAR:
            return {
                ...state,
                isProjectBarOpen: !state.isProjectBarOpen
            };

        case SiteActions.TOGGLE_TOOL_BAR:
            return {
                ...state,
                isToolBarOpen: !state.isToolBarOpen
            };

        default:
            return state;
    }
}
