import { storiesOf, moduleMetadata } from "@storybook/angular";
import { NowReadingComponent } from './now-reading.component';
import { withKnobs, object, text, number } from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../atoms/image/image.component';
import { cardImg } from '../../molecules/card/card.component.stories';
import { CardComponent } from '../../molecules/card/card.component';
import { LabelComponent } from '../../atoms/label/label.component';

const NowReading = {
    title: "Title",
    genre: "Genre",
    author: "Author",
    length: 999
}

storiesOf('Organisms|Now Reading', module)
.addDecorator( 
    moduleMetadata({
        imports: [
            CommonModule
        ],
        declarations: [NowReadingComponent, ImageComponent, CardComponent, LabelComponent]
    })
)
.addDecorator(withKnobs)
.add('Header Default', () => ({
        component: NowReadingComponent,
        props: {
            NowReading: object('NowReading', NowReading),
            cardImg
        }
    })
)