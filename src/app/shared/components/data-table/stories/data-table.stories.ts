import { moduleMetadata } from '@storybook/angular';
import { DataTableComponent } from '../..';
import { SharedModule } from '../../..';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
    title: 'Data Table',
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                SharedModule
            ],
        }),
    ],
};

export const emptyDataTable = () => ({
    component: DataTableComponent,
});
