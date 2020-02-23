import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth';
import { SiteModule } from './site';
import { AppComponent } from './site/containers';
import { fromApp } from './store';

@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,

    StoreModule.forRoot(fromApp.ROOT_REDUCERS, {
      metaReducers: fromApp.metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrument({
      name: 'Kosaml App',

      // In a production build you would want to disable the Store Devtools
      // logOnly: environment.production,
    }),

    EffectsModule.forRoot([]),

    AuthModule,
    SiteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
