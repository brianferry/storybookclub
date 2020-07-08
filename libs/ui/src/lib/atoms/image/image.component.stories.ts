import { storiesOf, moduleMetadata } from "@storybook/angular";
import { ImageComponent } from './image.component';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { UiModule } from '@bookorg/ui';

storiesOf('Atoms|image', module)
.addDecorator( 
    moduleMetadata({
        declarations: [ImageComponent]
    })
)
.addDecorator(withKnobs)
.add('Primary', () => ({
        component: ImageComponent,
        props: {
            'imgSrc': text('Image URL', 'assets/images/9f36332564ca271d.jpg'),
            'imgAlt': text('Image Alt Tag', 'Writing in Notebook'),
            'border': boolean('Border', false),
            'rounded': boolean('Rounded', false),
        }
    })
)