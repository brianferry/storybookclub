import { withKnobs, object, boolean } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { PieChartComponent } from './pie-chart.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { PieChartDataModel, PieChartModel } from 'libs/ui/src/models/PieChartModel';
import { withModule } from '@angular/core/testing';

export const ChartData: PieChartModel = {
    colorScheme: {
        domain: ['#101','#C55','#C0FFEE','#bada55'],
    },
    data: [
        {
            name: 'Zanarkand',
            value: 10
        },
        {
            name: 'Atlassian',
            value: 15
        },
    ]
}

storiesOf('Molecules|Pie Chart', module)
.addDecorator( 
    moduleMetadata({
        imports: [
            CommonModule,
            NgxChartsModule,
            BrowserAnimationsModule
        ],
        declarations: [PieChartComponent]
    })
)

.add('Primary', () => ({
        component: PieChartComponent,
        props: {
            ChartModel: object('Chart Data', ChartData)
        },
    })
)