import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { TaskScenarioPageComponent } from './containers/task-scenario-page/task-scenario-page.component';
import { TaskScenariosRoutingModule } from './task-scenarios-routing.module';

export const COMPONENTS = [
  TaskScenarioPageComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    SharedModule,
    TaskScenariosRoutingModule,
  ]
})
export class TaskScenariosModule { }
