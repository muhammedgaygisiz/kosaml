import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/project', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth').then(module => module.AuthModule),
  },
  {
    path: 'project',
    loadChildren: () => import('./site/site.module').then(module => module.SiteModule),
  },
  {
    path: 'task-scenarios',
    loadChildren: () =>
      import('./task-scenarios/task-scenarios.module').then(module => module.TaskScenariosModule),
  },
  {
    path: 'use-scenarios',
    loadChildren: () =>
      import('./use-scenarios/use-scenarios.module').then(module => module.UseScenariosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule],
})
export class AppRoutingModule { }
