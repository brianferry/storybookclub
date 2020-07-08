import { storiesOf, moduleMetadata } from "@storybook/angular";
import { LabelComponent } from './label.component';
import { withKnobs, text } from '@storybook/addon-knobs';

storiesOf('Atoms|label', module)
.addDecorator( 
    moduleMetadata({
        declarations: [LabelComponent]
    })
)
.addDecorator(withKnobs)
.add('Primary', () => ({
        template: `<input-label>{{text}}</input-label>`,
        props: {
            text: text('text', 'Input Label') 
        }
    })
)