import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { EmptyPageComponent, LoadingSpinnerComponent, ScenarioComponent } from './components';
import { KosamlCardComponent } from './components/kosaml-card/kosaml-card.component';
import { MatTableModule } from '@angular/material/table';
import {MatSliderModule} from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';

const COMPONENTS = [
  LoadingSpinnerComponent,
  EmptyPageComponent,
  KosamlCardComponent,
  ScenarioComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSliderModule,
    MatPaginatorModule,
    MatStepperModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSliderModule,
    MatPaginatorModule,
    MatStepperModule,
    MatCardModule,
    LoadingSpinnerComponent,
    KosamlCardComponent,
    ScenarioComponent,
  ],
})
export class SharedModule { }
