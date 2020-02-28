import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { moduleMetadata } from '@storybook/angular';
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
                RouterTestingModule
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