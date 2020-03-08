import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { moduleMetadata } from '@storybook/angular';
import { SiteModule } from 'src/app/site/site.module';
import { fromApp } from 'src/app/store';
import { HeaderComponent } from '../header.component';


export default {
    title: 'Header',
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                SiteModule,
                StoreModule.forRoot(fromApp.ROOT_REDUCERS),
                RouterTestingModule,
                EffectsModule.forRoot([]),
                HttpClientTestingModule,
            ],
            providers: [{ provide: APP_BASE_HREF, useValue: '/' }, Store]
        })
    ]
}

export const emptyHeader = () => ({
    component: HeaderComponent,
})