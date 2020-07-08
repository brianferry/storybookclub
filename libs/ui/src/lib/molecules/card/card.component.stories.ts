import { storiesOf, moduleMetadata } from "@storybook/angular";
import { LabelComponent } from '../../atoms/label/label.component';
import { CardComponent } from './card.component';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import { UiModule } from '../../ui.module';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../atoms/image/image.component';

export const cardTitle = "Card Title!";
export const cardBody = "Test"
export const cardImgAlt = "Card Image Alt!";
export const cardImgEnabled = true;
export const cardImg = "assets/images/9f36332564ca271d.jpg";
export const cardImgRounded = false;
export const cardImgBorder = false;

storiesOf('Molecules|card', module)
.addDecorator( 
    moduleMetadata({
        imports: [
            CommonModule
        ],
        declarations: [CardComponent, LabelComponent, ImageComponent]
    })
)
.add('Default Card', () => ({
        template: `<div style='height:500px;width:500px'>
                    <bookorg-card 
                            [cardTitle]="cardTitle"
                            [cardImgAlt]="cardImgAlt"
                            [cardImg]="cardImg"
                            [cardImgRounded]="cardImgRounded"
                            [cardImgBorder]="cardImgBorder"
                            [cardImgEnabled]="cardImgEnabled"
                    >
                    {{cardBody}}
                    </bookorg-card>
                   </div>`,
        props: {
            'cardTitle': text('Title', cardTitle, 'Default'),
            'cardBody': text('Card Body', cardBody),
            'cardImgAlt': text('Image Alt Tag', cardImgAlt, 'Default'),
            'cardImgEnabled': boolean('Card Image Enabled', cardImgEnabled, 'Image'),
            'cardImg': text('Image URL', cardImg, 'Image'),
            'cardImgRounded': boolean('Card Image Rounded', cardImgRounded, 'Image'),
            'cardImgBorder': boolean('Card Image Bordered', cardImgBorder, 'Image'),
        }
    })
)