import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/project', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren:
      () => import('./auth')
        .then(module => module.AuthModule)
  },
  {
    path: 'project',
    loadChildren:
      () => import('./site/site.module')
        .then(module => module.SiteModule)
  },
  {
    path: 'task-scenarios',
    loadChildren:
      () => import('./task-scenarios/task-scenarios.module')
        .then(module => module.TaskScenariosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
