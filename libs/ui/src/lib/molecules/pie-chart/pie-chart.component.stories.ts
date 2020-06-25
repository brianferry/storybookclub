import { text, array, withKnobs, object, boolean } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { PieChartComponent } from './pie-chart.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StoreModule } from '@ngrx/store';
import * as fromUi from '../../+state/ui/ui.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UiEffects } from '../../+state/ui/ui.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

storiesOf('M O L E C U L E S|Pie Chart', module)
.addDecorator( 
    moduleMetadata({
        imports: [
            CommonModule,
            NgxChartsModule,
            BrowserAnimationsModule,
            StoreModule.forRoot([]),
            StoreModule.forFeature(fromUi.UI_FEATURE_KEY, fromUi.reducer),
            EffectsModule.forRoot([]),
        ],
        declarations: [PieChartComponent]
    })
)
.addDecorator(withKnobs)
.add('Primary', () => ({
        component: PieChartComponent,
        props: {
            colorScheme: object('Color Scheme', ['#101','#C55','#C0FFEE','#bada55']),
            showLabels: boolean('Show Labels', true)
        },
        
    })
)

// export default {
//   title: 'atoms/Pie Chart',
//   decorators: [withKnobs,
   
//   ]
// }

// export const Primary = () => ({
//   component: PieChartComponent,
//   props: {
//   }
// })
