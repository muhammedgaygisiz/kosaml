import * as SiteActions from './site.actions';

export interface State {
    projectBarOpen: boolean;
}

const initialState: State = {
    projectBarOpen: false,
};

export function siteReducer(
    state: State = initialState,
    action: SiteActions.SiteActions
) {
    switch (action.type) {
        case SiteActions.TOGGLE_PROJECT_BAR:
            return {
                ...state,
                projectBarOpen: !state.projectBarOpen
            };

        default:
            return state;
    }
}
