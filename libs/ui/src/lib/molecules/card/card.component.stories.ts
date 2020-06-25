import { storiesOf, moduleMetadata } from "@storybook/angular";
import { LabelComponent } from '../../atoms/label/label.component';
import { CardComponent } from './card.component';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { UiModule } from '../../ui.module';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../atoms/image/image.component';

storiesOf('M O L E C U L E S|card', module)
.addDecorator( 
    moduleMetadata({
        imports: [
            CommonModule
        ],
        declarations: [CardComponent, LabelComponent, ImageComponent]
    })
)
.addDecorator(withKnobs)
.add('Default Card', () => ({
        template: `<div style='height:500px;width:500px'>
                    <bookorg-card 
                            [cardTitle]="cardTitle"
                            [cardBody]="cardBody"
                            [cardImgAlt]="cardImgAlt"
                            [cardImg]="cardImg"
                            [cardImgRounded]="cardImgRounded"
                            [cardImgBorder]="cardImgBorder"
                            [cardImgEnabled]="cardImgEnabled"
                    >
                    </bookorg-card>
                   </div>`,
        props: {
            'cardTitle': text('Title', 'Card Title!', 'Default'),
            'cardBody': text('body', 'Card Body!', 'Default'),
            'cardImgAlt': text('Image Alt Tag', 'Cool Alt Tag!', 'Default'),
            'cardImgEnabled': boolean('Card Image Enabled', true, 'Image'),
            'cardImg': text('Image URL', 'assets/images/9f36332564ca271d.jpg', 'Image'),
            'cardImgRounded': boolean('Card Image Rounded', false, 'Image'),
            'cardImgBorder': boolean('Card Image Bordered', false, 'Image'),
        }
    })
)