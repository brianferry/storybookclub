import { text, array, withKnobs, object, boolean } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { TableComponent } from './table.component';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

storiesOf('M O L E C U L E S|Table', module)
.addDecorator( 
    moduleMetadata({
        imports: [
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            AgGridModule.withComponents([]),
        ],
        declarations: [TableComponent]
    })
)
.addDecorator(withKnobs)
.add('Primary', () => ({
        template: `<div style="height:500px"><bookorg-table></bookorg-table></div>`
    })
)