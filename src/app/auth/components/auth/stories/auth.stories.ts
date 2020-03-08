import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { moduleMetadata } from '@storybook/angular';
import { fromApp } from 'src/app/store';
import { SharedModule } from '../../../../shared';
import { AuthComponent } from '../auth.component';


export default {
    title: 'Auth',
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                SharedModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                MatInputModule,
                StoreModule.forRoot(fromApp.ROOT_REDUCERS),
                RouterTestingModule,
                EffectsModule.forRoot([]),
                HttpClientTestingModule,
            ],
            providers: [{ provide: APP_BASE_HREF, useValue: '/' }, Store]
        })
    ]
}

export const auth = () => ({
    component: AuthComponent,
})