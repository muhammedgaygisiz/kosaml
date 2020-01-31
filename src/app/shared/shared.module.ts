import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
    ],
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
