import { createAction, props } from '@ngrx/store';
import { FileNode } from '../models';

export const startLoading = createAction('[Site] Start Loading');
export const stopLoading = createAction('[Site] Stop Loading');
export const toggleProjectBar = createAction('[Site] Toggle Project Bar');
export const toggleToolBar = createAction('[Site] Toggle Tool Bar');
export const fetchProject = createAction('[Site] Fetching Project');
export const fetchedProject = createAction('[Site] Fetched Project', props<{ projectStructure: FileNode[] }>());
export const sidebarWidthChange = createAction('[Site] Sidebar Width Change', props<{ width: string }>())
export let storeProject = createAction('[Site] Store Project');
