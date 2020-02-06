import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './site/containers/app.component';
import { SiteModule } from './site/site.module';
import * as fromApp from './store/app.reducer';

@NgModule({
  declarations: [
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    EffectsModule.forRoot([]),
    AuthModule,
    SiteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
