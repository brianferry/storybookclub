import { storiesOf, moduleMetadata } from "@storybook/angular";
import { HomePageWrapperComponent } from '../home-page-wrapper/home-page-wrapper.component';
import { WrapperModule } from '../wrapper.module';

storiesOf('Pages|Home Page', module)
.addDecorator( 
    moduleMetadata({
        imports: [
            WrapperModule
        ],
        declarations: [
        ]
    })

)
.add('Header Default', () => ({
        component: HomePageWrapperComponent,
    })
)