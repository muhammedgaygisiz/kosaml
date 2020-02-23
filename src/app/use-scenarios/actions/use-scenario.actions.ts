import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { UseScenario } from '../models';

export const loadUseScenarios = createAction(
  '[UseScenario/API] Load UseScenarios',
  props<{ useScenarios: UseScenario[] }>(),
);

export const addUseScenario = createAction(
  '[UseScenario/API] Add UseScenario',
  props<{ useScenario: UseScenario }>(),
);

export const upsertUseScenario = createAction(
  '[UseScenario/API] Upsert UseScenario',
  props<{ useScenario: UseScenario }>(),
);

export const addUseScenarios = createAction(
  '[UseScenario/API] Add UseScenarios',
  props<{ useScenarios: UseScenario[] }>(),
);

export const upsertUseScenarios = createAction(
  '[UseScenario/API] Upsert UseScenarios',
  props<{ useScenarios: UseScenario[] }>(),
);

export const updateUseScenario = createAction(
  '[UseScenario/API] Update UseScenario',
  props<{ useScenario: Update<UseScenario> }>(),
);

export const updateUseScenarios = createAction(
  '[UseScenario/API] Update UseScenarios',
  props<{ useScenarios: Update<UseScenario>[] }>(),
);

export const deleteUseScenario = createAction(
  '[UseScenario/API] Delete UseScenario',
  props<{ id: string }>(),
);

export const deleteUseScenarios = createAction(
  '[UseScenario/API] Delete UseScenarios',
  props<{ ids: string[] }>(),
);

export const clearUseScenarios = createAction('[UseScenario/API] Clear UseScenarios');
