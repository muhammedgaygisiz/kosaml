import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { moduleMetadata } from '@storybook/angular';
import { StepViewComponent } from '../..';
import { SharedModule } from '../../..';

export default {
    title: 'Step View',
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                SharedModule,
                RouterTestingModule,
            ],
        }),
    ],
};

export const stepViewWithTwoStep = () => ({
    component: StepViewComponent,
    props: {
        steps: [{
            path: "Step 1",
            completed: false
        }, {
            path: "Step 2",
            completed: false
        }],
        stepState: {},
        selectedIndex: 0
    }
});
