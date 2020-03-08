import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { UseScenarioActions } from '../actions';
import { UseScenario } from '../models';

export const useScenariosFeatureKey = 'useScenarios';

export interface State extends EntityState<UseScenario> {
  // additional entities state properties
  selectedUseScenarioId: string | null
}

export function selectedUseScenarioId(ts: UseScenario) {
  return ts.id;
}

export const adapter: EntityAdapter<UseScenario> = createEntityAdapter<UseScenario>({
  selectId: selectedUseScenarioId
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedUseScenarioId: null
});

const useScenarioReducer = createReducer(
  initialState,
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

// ------------------

export const selectUseScenarioState = createFeatureSelector<State>(
  useScenariosFeatureKey
);

export const selectUseScenarioEntitiesState = createSelector(
  selectUseScenarioState,
  state => state.entities
)

export const selectSelectedUseScenarioId = createSelector(
  selectUseScenarioState,
  state => state.selectedUseScenarioId
)

export const {
  selectEntities: selectUseScenarioEntities,
  selectAll,
} = adapter.getSelectors();

export const selectSelectedUseScenario = createSelector(
  selectUseScenarioEntities,
  selectSelectedUseScenarioId,
  (entities, selectedId) => selectedId && entities && entities[selectedId]
)

export const selectAllUseScenarios = createSelector(
  selectUseScenarioState,
  selectAll,
)

