import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { InputTextComponent } from './input-text.component';

export default {
  title: 'atoms/input',
  decorators: [withKnobs]
}

export const primary = () => ({
  component: InputTextComponent,
  props: {
    'placeholder': text('placeholder', 'placeholder'),
    'rounded': boolean('rounded', false),
    'disabled': boolean('disabled', false),
    'password': boolean('password', false)
  }
})
