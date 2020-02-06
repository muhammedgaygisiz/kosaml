import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './components';
import { AuthPageComponent } from './containers/auth-page.component';
import { AuthEffects } from './effects/auth.effects';
import * as fromAuth from './reducers/auth.reducer';

export const COMPONENTS = [
    AuthPageComponent,
    AuthComponent,
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        SharedModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        HttpClientModule,
        RouterModule.forChild([{ path: '', component: AuthPageComponent }]),
        StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
        EffectsModule.forFeature([AuthEffects])
    ]
})
export class AuthModule {

}
