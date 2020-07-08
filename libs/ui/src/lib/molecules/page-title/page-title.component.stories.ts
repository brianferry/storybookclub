import { storiesOf, moduleMetadata } from "@storybook/angular";
import { PageTitleComponent } from './page-title.component';
import { text } from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from '../../atoms/heading/heading.component';

storiesOf('Molecules|page title', module)
.addDecorator( 
    moduleMetadata({
        imports: [
            CommonModule
        ],
        declarations: [PageTitleComponent, HeadingComponent]
    })
)
.add('Default', () => ({
    component: PageTitleComponent,
        props: {
            'title': text('title', "Home")
        }
    })
)