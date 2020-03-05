import { createAction, props } from '@ngrx/store';
import { TaskScenario } from '../models';

export const selectTaskScenario = createAction(
    '[View TaskScenario Page] Select TaskScenario',
    props<{ id: number }>()
)

export const newTaskScenario = createAction(
    '[View TaskScenario Page] New TaskScenario',
)

export const storeTaskScenario = createAction(
    '[View TaskScneario Page] Save TaskScenario',
    props<{ taskScenario: TaskScenario }>()
)