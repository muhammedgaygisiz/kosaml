import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards';
import { EditTaskScenarioPageComponent, NewTaskScenarioPageComponent } from './containers';
import { TaskScenariosResolverService } from './services';

const routes: Routes = [
  {
    path: 'new',
    component: NewTaskScenarioPageComponent,
    canActivate: [AuthGuard],
    resolve: [TaskScenariosResolverService]
  },
  {
    path: ':id',
    component: EditTaskScenarioPageComponent,
    canActivate: [AuthGuard],
    resolve: [TaskScenariosResolverService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskScenariosRoutingModule { }
