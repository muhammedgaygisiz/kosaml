import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components';
import { AuthPageComponent } from './containers';
import { AuthEffects } from './effects';
import { fromAuth } from './reducers';

export const COMPONENTS = [AuthPageComponent, AuthComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    SharedModule,
    MatButtonModule,
    HttpClientModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
