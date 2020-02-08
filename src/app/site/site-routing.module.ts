import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards';
import { EmptyPageComponent } from '../shared/components/empty-page/empty-page.component';

const routes: Routes = [
    { path: '', component: EmptyPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SiteRoutingModule {

}
