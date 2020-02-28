import { createAction, props } from '@ngrx/store';

export const toggleProjectBar = createAction('[Site] Toggle Project Bar');
export const toggleToolBar = createAction('[Site] Toggle Tool Bar');
export const sidebarWidthChange = createAction('[Site] Sidebar Width Change', props<{ width: string }>())
