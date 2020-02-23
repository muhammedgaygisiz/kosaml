import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { TaskScenarioPageActions } from '../actions';
import * as TaskScenarioActions from '../actions/task-scenario.actions';
import { TaskScenario } from '../models';

export const taskScenariosFeatureKey = 'taskScenarios';

export interface State extends EntityState<TaskScenario> {
  // additional entities state properties
}

export const adapter: EntityAdapter<TaskScenario> = createEntityAdapter<TaskScenario>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const taskScenarioReducer = createReducer(
  initialState,
  on(TaskScenarioPageActions.fetchTaskScenarios, state => ({ ...state })),
  on(TaskScenarioActions.addTaskScenario, (state, action) =>
    adapter.addOne(action.taskScenario, state),
  ),
  on(TaskScenarioActions.upsertTaskScenario, (state, action) =>
    adapter.upsertOne(action.taskScenario, state),
  ),
  on(TaskScenarioActions.addTaskScenarios, (state, action) =>
    adapter.addMany(action.taskScenarios, state),
  ),
  on(TaskScenarioActions.upsertTaskScenarios, (state, action) =>
    adapter.upsertMany(action.taskScenarios, state),
  ),
  on(TaskScenarioActions.updateTaskScenario, (state, action) =>
    adapter.updateOne(action.taskScenario, state),
  ),
  on(TaskScenarioActions.updateTaskScenarios, (state, action) =>
    adapter.updateMany(action.taskScenarios, state),
  ),
  on(TaskScenarioActions.deleteTaskScenario, (state, action) =>
    adapter.removeOne(action.id, state),
  ),
  on(TaskScenarioActions.deleteTaskScenarios, (state, action) =>
    adapter.removeMany(action.ids, state),
  ),
  on(TaskScenarioActions.loadTaskScenarios, (state, action) =>
    adapter.addAll(action.taskScenarios, state),
  ),
  on(TaskScenarioActions.clearTaskScenarios, state => adapter.removeAll(state)),
);

export function reducer(state: State | undefined, action: Action) {
  return taskScenarioReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const taskScenarioState = createFeatureSelector<State>(taskScenariosFeatureKey);

export const getTaskScenarioEntityById = (id: number) =>
  createSelector(taskScenarioState, (state: State) => state.entities[id]);
