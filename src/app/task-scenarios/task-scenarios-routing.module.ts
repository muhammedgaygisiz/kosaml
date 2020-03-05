import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards';
import { TaskScenarioPageComponent } from './containers';
import { TaskScenariosResolverService } from './services';

const routes: Routes = [
  {
    path: ':id',
    component: TaskScenarioPageComponent,
    canActivate: [AuthGuard],
    resolve: [TaskScenariosResolverService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskScenariosRoutingModule { }
