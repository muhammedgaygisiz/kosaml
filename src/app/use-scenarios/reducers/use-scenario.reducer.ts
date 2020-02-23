import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { UseScenarioActions, UseScenarioPageActions } from '../actions';
import { UseScenario } from '../models';

export const useScenariosFeatureKey = 'useScenarios';

export interface State extends EntityState<UseScenario> {
  // additional entities state properties
}

export const adapter: EntityAdapter<UseScenario> = createEntityAdapter<UseScenario>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const useScenarioReducer = createReducer(
  initialState,
  on(UseScenarioPageActions.fetchUseScenarios, state => ({ ...state })),
  on(UseScenarioActions.addUseScenario, (state, action) =>
    adapter.addOne(action.useScenario, state),
  ),
  on(UseScenarioActions.upsertUseScenario, (state, action) =>
    adapter.upsertOne(action.useScenario, state),
  ),
  on(UseScenarioActions.addUseScenarios, (state, action) =>
    adapter.addMany(action.useScenarios, state),
  ),
  on(UseScenarioActions.upsertUseScenarios, (state, action) =>
    adapter.upsertMany(action.useScenarios, state),
  ),
  on(UseScenarioActions.updateUseScenario, (state, action) =>
    adapter.updateOne(action.useScenario, state),
  ),
  on(UseScenarioActions.updateUseScenarios, (state, action) =>
    adapter.updateMany(action.useScenarios, state),
  ),
  on(UseScenarioActions.deleteUseScenario, (state, action) =>
    adapter.removeOne(action.id, state),
  ),
  on(UseScenarioActions.deleteUseScenarios, (state, action) =>
    adapter.removeMany(action.ids, state),
  ),
  on(UseScenarioActions.loadUseScenarios, (state, action) =>
    adapter.addAll(action.useScenarios, state),
  ),
  on(UseScenarioActions.clearUseScenarios, state => adapter.removeAll(state)),
);

export function reducer(state: State | undefined, action: Action) {
  return useScenarioReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const useScenarioState = createFeatureSelector<State>(useScenariosFeatureKey);

export const getUseScenarioEntityById = (id: number) =>
  createSelector(useScenarioState, (state: State) => state.entities[id]);
