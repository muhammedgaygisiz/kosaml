import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CardComponent, EmptyPageComponent, LoadingSpinnerComponent, ScenarioComponent } from './components';
import { PageComponent } from './components/page/page.component';

const COMPONENTS = [
  LoadingSpinnerComponent,
  EmptyPageComponent,
  CardComponent,
  ScenarioComponent,
  PageComponent,
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
    CardComponent,
    ScenarioComponent,
    PageComponent
  ],
})
export class SharedModule { }
