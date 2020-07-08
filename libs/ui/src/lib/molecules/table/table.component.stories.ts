import { text, array, withKnobs, object, boolean } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { TableComponent } from './table.component';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const columnDefs = [
    {
        'field': "name"
    },
    {
        'field': "department"
    },
    {
        'field': "location"
    }
]

export const rowData = [
    {
        name: "Boot",
        department: "Engineering",
        location: "Jingzhu"
    },
    {
        name: "Filippa",
        department: "Sales",
        location: "Lueng Putu"
    },
    {
        name: "Issiah",
        department: "Product Management",
        location: "Boulogne-Billancourt"
    },
    {
        name: "Mariellen",
        department: "Training",
        location: "Slovenska Bistrica"
    },
    {
        name: "Aeriela",
        department: "Marketing",
        location: "Mādabā"
    },
    {
        name: "Mariellen",
        department: "Training",
        location: "Slovenska Bistrica"
    },
    {
        name: "Aeriela",
        department: "Marketing",
        location: "Mādabā"
    },
    {
        name: "Mariellen",
        department: "Training",
        location: "Slovenska Bistrica"
    },
    {
        name: "Aeriela",
        department: "Marketing",
        location: "Mādabā"
    },
    {
        name: "Mariellen",
        department: "Training",
        location: "Slovenska Bistrica"
    },
    {
        name: "Aeriela",
        department: "Marketing",
        location: "Mādabā"
    }
]

storiesOf('Molecules|Table', module)
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
        template: `<div style="height:500px"><bookorg-table [columnDefs]="columnDefs" [rowData]="rowData"></bookorg-table></div>`,
        props:{
            columnDefs: object('Column Definitions', columnDefs),
            rowData: object('Rows Definitions', rowData),
        }
    })
)