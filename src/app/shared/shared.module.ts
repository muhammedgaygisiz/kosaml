import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        EmptyPageComponent,
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
