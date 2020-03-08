import { createAction, props } from '@ngrx/store';
import { UseScenario } from '../models';

export const selectUseScenario = createAction(
    '[View UseScenario Page] Select UseScenario',
    props<{ id: string }>()
)

export const newUseScenario = createAction(
    '[View UseScenario Page] New UseScenario',
)

export const storeUseScenario = createAction(
    '[View TaskScneario Page] Save UseScenario',
    props<{ UseScenario: UseScenario }>()
)