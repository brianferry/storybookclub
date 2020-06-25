import { text, withKnobs } from '@storybook/addon-knobs';
import { LinkComponent } from './link.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';

storiesOf('A T O M S|link', module)
.addDecorator( 
    moduleMetadata({
        declarations: [LinkComponent]
    })
)
.addDecorator(withKnobs)
.add('Primary', () => ({
        template: `<bookorg-link
                        [linkClass]="linkClass"
                        [linkHref]="linkHref"
                    >
                        {{ linkText }}
                   </bookorg-link>`,
        props: {
            linkClass: text('Css Class', 'Class'),
            linkHref: text('URL Link', 'https://www.google.com'),
            linkText: text('HREF Text', 'New Link!')
        }
    })
)