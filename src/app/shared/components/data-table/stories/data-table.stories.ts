import { moduleMetadata } from '@storybook/angular';
import { DataTableComponent } from '../..';
import { SharedModule } from '../../..';

export default {
    title: 'Data Table',
    decorators: [
        moduleMetadata({
            imports: [SharedModule],
        }),
    ],
};

export const emptyDataTable = () => ({
    component: DataTableComponent,
});
