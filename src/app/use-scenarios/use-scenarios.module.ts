import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared';
import { UseScenarioPageComponent } from './containers';
import { UseScenariosEffects } from './effects';
import { fromUseScenarios } from './reducers';
import { UseScenariosRoutingModule } from './use-scenarios-routing.module';


export const COMPONENTS = [
  UseScenarioPageComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    SharedModule,
    UseScenariosRoutingModule,
    StoreModule.forFeature(
      fromUseScenarios.useScenariosFeatureKey,
      fromUseScenarios.reducer,
    ),
    EffectsModule.forFeature([UseScenariosEffects])
  ]
})
export class UseScenariosModule { }
