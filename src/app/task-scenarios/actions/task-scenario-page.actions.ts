import { createAction, props } from '@ngrx/store';

export const selectTaskScenario = createAction(
    '[View TaskScenario Page] Select TaskScenario',
    props<{ id: number }>()
)

export const newTaskScenario = createAction(
    '[View TaskScenario Page] New TaskScenario',
)