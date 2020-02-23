import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScenarioComponent } from '../..';

export default {
    title: 'Scenario',
    decorators: [
        moduleMetadata({
            imports: [SharedModule],
        }),
    ],
};

export const scenario = () => ({
    component: ScenarioComponent
});