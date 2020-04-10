import { moduleMetadata } from '@storybook/angular';
import { KosamlCardComponent } from '../..';
import { SharedModule } from '../../..';

export default {
  title: 'Card',
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
};

export const emptyCard = () => ({
  component: KosamlCardComponent,
});
