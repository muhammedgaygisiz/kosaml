import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared';
import { TaskScenarioComponent } from './components';
import { TaskScenarioPageComponent } from './containers';
import { fromTaskScenarios } from './reducers';
import { TaskScenariosRoutingModule } from './task-scenarios-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { TaskScenariosEffects } from './effects';

export const COMPONENTS = [
  TaskScenarioPageComponent,
  TaskScenarioComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    SharedModule,
    TaskScenariosRoutingModule,
    StoreModule.forFeature(
      fromTaskScenarios.taskScenariosFeatureKey,
      fromTaskScenarios.reducer
    ),
    EffectsModule.forFeature([TaskScenariosEffects])
  ]
})
export class TaskScenariosModule { }
