import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { moduleMetadata } from '@storybook/angular';
import { EmptyPageComponent } from 'src/app/shared/components';
import { SiteModule } from 'src/app/site/site.module';
import { fromApp } from 'src/app/store';
import { SidebarComponent } from '../sidebar.component';


export default {
    title: 'Sidebar',
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                SiteModule,
                StoreModule.forRoot(fromApp.ROOT_REDUCERS),
                RouterTestingModule.withRoutes([{
                    path: "**",
                    component: EmptyPageComponent
                }]),
                EffectsModule.forRoot([]),
                HttpClientTestingModule,
            ],
            providers: [{ provide: APP_BASE_HREF, useValue: '/' }, Store]
        })
    ]
}

export const emptySidebar = () => ({
    component: SidebarComponent,
    props: {
        project: [{
            children: [{
                name: "Folder",
                type: "file"
            }],
            name: "File",
            type: "folder"
        }],
        isProjectBarOpen: true,
        marginTop: 0,
        width: 250,
    }
})