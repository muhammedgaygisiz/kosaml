import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { EmptyPageComponent, LoadingSpinnerComponent } from './components';

const COMPONENTS = [
    LoadingSpinnerComponent,
    EmptyPageComponent,
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        NgxSkeletonLoaderModule,
        MatCardModule,

    ],
    exports: [
        LoadingSpinnerComponent,
        CommonModule,
    ]
})
export class SharedModule {

}
