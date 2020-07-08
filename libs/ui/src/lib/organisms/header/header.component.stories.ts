import { storiesOf, moduleMetadata } from "@storybook/angular";
import { HeaderComponent } from './header.component';
import { withKnobs, object } from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../../atoms/link/link.component';
import { LabelComponent } from '../../atoms/label/label.component';
import { NavBarModel } from 'libs/ui/src/models/NavBarModel';
import { ImageComponent } from '../../atoms/image/image.component';
import { User } from 'libs/ui/src/models/UserModel';

let NavItems: NavBarModel[] = [
    {
        name: "First",
        url: "./#"
    },
    {
        name: "Second",
        url: "./#2"
    },
    {
        name: "Third",
        url: "./#3"
    }
];

let UserObj: User = {
    name: "Allison Acosta",
    title: 'Geologist IV',
    imgUrl: "assets/images/9f36332564ca271d.jpg"
}

storiesOf('Organisms|Header', module)
.addDecorator( 
    moduleMetadata({
        imports: [
            CommonModule
        ],
        declarations: [
            HeaderComponent, 
            LabelComponent, 
            LinkComponent, 
            ImageComponent
        ]
    })
)
.addDecorator(withKnobs)
.add('Header Default', () => ({
        component: HeaderComponent,
        props: {
            NavItems: object('Items', NavItems, 'Navigation'),
            User: object('User Information', UserObj, 'User')
        }
    })
)