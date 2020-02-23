import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScenarioComponent } from '../..';

export default {
    title: 'Scenario',
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                SharedModule,
            ],
        }),
    ],
};

export const emptyScenario = () => ({
    component: ScenarioComponent,
    props: {
        model: {
            title: "",
            description: "",
        }
    }
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