import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/project', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren:
      () => import('./auth/auth.module')
        .then(module => module.AuthModule)
  },
  {
    path: 'project',
    loadChildren:
      () => import('./site/site.module')
        .then(module => module.SiteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
