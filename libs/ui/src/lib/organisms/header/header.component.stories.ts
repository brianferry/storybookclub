import { storiesOf, moduleMetadata } from "@storybook/angular";
import { HeaderComponent } from './header.component';
import { withKnobs } from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';

storiesOf('O R G A N I S M S|Header', module)
.addDecorator( 
    moduleMetadata({
        imports: [
            CommonModule
        ],
        declarations: [HeaderComponent]
    })
)
.addDecorator(withKnobs)
.add('Header Default', () => ({
        component: HeaderComponent
    })
)