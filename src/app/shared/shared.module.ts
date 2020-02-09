import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { EmptyPageComponent, LoadingSpinnerComponent } from './components';
import { KosamlCardComponent } from './components/kosaml-card/kosaml-card.component';

const COMPONENTS = [
    LoadingSpinnerComponent,
    EmptyPageComponent,
    KosamlCardComponent,
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        NgxSkeletonLoaderModule,
        MatCardModule,
    ],
    exports: [
        CommonModule,
        LoadingSpinnerComponent,
        KosamlCardComponent
    ]
})
export class SharedModule {

}
