import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { SharedModule } from '../shared/shared.module';
import { BodyComponent } from './components/body/body.component';
import { ProjectComponent } from './components/body/project/project.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppComponent } from './containers/app.component';
import { SiteRoutingModule } from './site-routing.module';

export const COMPONENTS = [
    HeaderComponent,
    BodyComponent,
    ProjectComponent,
    ContentComponent,
    SidebarComponent,
    AppComponent
];

@NgModule({
    declarations: COMPONENTS,
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
