import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { TaskScenario } from '../models';

export const loadTaskScenarios = createAction(
  '[TaskScenario/API] Load TaskScenarios',
  props<{ taskScenarios: TaskScenario[] }>(),
);

export const addTaskScenario = createAction(
  '[TaskScenario/API] Add TaskScenario',
  props<{ taskScenario: TaskScenario }>(),
);

export const upsertTaskScenario = createAction(
  '[TaskScenario/API] Upsert TaskScenario',
  props<{ taskScenario: TaskScenario }>(),
);

export const addTaskScenarios = createAction(
  '[TaskScenario/API] Add TaskScenarios',
  props<{ taskScenarios: TaskScenario[] }>(),
);

export const upsertTaskScenarios = createAction(
  '[TaskScenario/API] Upsert TaskScenarios',
  props<{ taskScenarios: TaskScenario[] }>(),
);

export const updateTaskScenario = createAction(
  '[TaskScenario/API] Update TaskScenario',
  props<{ taskScenario: Update<TaskScenario> }>(),
);

export const updateTaskScenarios = createAction(
  '[TaskScenario/API] Update TaskScenarios',
  props<{ taskScenarios: Update<TaskScenario>[] }>(),
);

export const deleteTaskScenario = createAction(
  '[TaskScenario/API] Delete TaskScenario',
  props<{ id: string }>(),
);

export const deleteTaskScenarios = createAction(
  '[TaskScenario/API] Delete TaskScenarios',
  props<{ ids: string[] }>(),
);

export const clearTaskScenarios = createAction('[TaskScenario/API] Clear TaskScenarios');
