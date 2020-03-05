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
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    LoadingSpinnerComponent,
    KosamlCardComponent,
    ScenarioComponent,
  ],
})
export class SharedModule { }

// MatFormFieldModule,
