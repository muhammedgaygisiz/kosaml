import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared';
import { TaskScenarioPageComponent } from './containers';
import { TaskScenariosEffects } from './effects';
import { fromTaskScenarios } from './reducers';
import { TaskScenariosRoutingModule } from './task-scenarios-routing.module';

export const COMPONENTS = [
  TaskScenarioPageComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    SharedModule,
    TaskScenariosRoutingModule,
    StoreModule.forFeature(
      fromTaskScenarios.taskScenariosFeatureKey,
      fromTaskScenarios.reducer,
    ),
    EffectsModule.forFeature([TaskScenariosEffects]),
  ],
})
export class TaskScenariosModule { }
