import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { SharedModule } from '../shared/shared.module';
import { BodyComponent } from './body/body.component';
import { ContentComponent } from './body/content/content.component';
import { ProjectComponent } from './body/project/project.component';
import { HeaderComponent } from './header/header.component';
import { SiteRoutingModule } from './site-routing.module';

@NgModule({
    declarations: [
        HeaderComponent,
        BodyComponent,
        ProjectComponent,
        ContentComponent,
    ],
    imports: [
        MatIconModule,
        MatToolbarModule,
        SharedModule,
        MatSidenavModule,
        MatListModule,
        MatTreeModule,
        MatButtonModule,
        SiteRoutingModule
    ],
    exports: [
        HeaderComponent,
        BodyComponent,
    ]
})
export class SiteModule {

}
