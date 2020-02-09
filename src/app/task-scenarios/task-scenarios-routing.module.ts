import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards';
import { TaskScenarioPageComponent } from './containers/task-scenario-page/task-scenario-page.component';


const routes: Routes = [
  { path: '', component: TaskScenarioPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskScenariosRoutingModule { }
