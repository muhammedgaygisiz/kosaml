import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { TaskScenarioPageComponent } from './containers';
import { TaskScenariosRoutingModule } from './task-scenarios-routing.module';
import { TaskScenarioComponent } from './components';

export const COMPONENTS = [
  TaskScenarioPageComponent,
  TaskScenarioComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    SharedModule,
    TaskScenariosRoutingModule,
  ]
})
export class TaskScenariosModule { }
