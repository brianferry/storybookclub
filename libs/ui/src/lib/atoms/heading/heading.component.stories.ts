import { boolean, number, text, select, withKnobs } from '@storybook/addon-knobs';
import { HeadingComponent } from './heading.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';

const options = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6
}

storiesOf('Atoms|heading', module)
.addDecorator( 
    moduleMetadata({
        declarations: [HeadingComponent]
    })
)
.addDecorator(withKnobs)
.add('Primary', () => ({
    component: HeadingComponent,
    props: {
        level: select("Header Level", options, 1),
        text: text('Header Text', "Lorem Ipsum")
    }
})
)