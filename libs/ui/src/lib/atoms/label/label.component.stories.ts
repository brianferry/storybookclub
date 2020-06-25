import { text, withKnobs } from '@storybook/addon-knobs';
import { LabelComponent } from './label.component';

export default {
  title: 'atoms/label',
  decorators: [withKnobs]
}

export const Primary = () => ({
  component: LabelComponent,
  props: {
    text: text('text', 'Input Label')
  }
})
