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

export const emptyScenario = () => ({
    component: ScenarioComponent
});

export const filledScenario = () => ({
    component: ScenarioComponent,
    props: {
        model: {
            title: "This is a title",
            description: "This is a description"
        }
    }
});