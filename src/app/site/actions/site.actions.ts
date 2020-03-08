import { createAction, props } from '@ngrx/store';
import { FileNode } from '../models';

export const toggleProjectBar = createAction('[Site] Toggle Project Bar');
export const toggleToolBar = createAction('[Site] Toggle Tool Bar');
export const fetchedProject = createAction('[Site] Fetched Project', props<{ projectStructure: FileNode[] }>());
export const sidebarWidthChange = createAction('[Site] Sidebar Width Change', props<{ width: string }>())
