import { createAction, props } from '@ngrx/store';

export const fetchTaskScenarios = createAction(
    '[TaskScenario/API] Fetch TaskScenarios'
);

export const selectTaskScenario = createAction(
    '[View TaskScenario Page] Select TaskScenario',
    props<{ id: string }>()
)

export const newTaskScenario = createAction(
    '[View TaskScenario Page] New TaskScenario',
)