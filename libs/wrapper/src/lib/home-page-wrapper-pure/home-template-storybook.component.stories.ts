import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs';
import { NavBarModel } from 'libs/ui/src/models/NavBarModel';
import { rowData, columnDefs } from '../../../../ui/src/lib/molecules/table/table.component.stories';
import { HomePageWrapperPureComponent } from './home-page-wrapper-pure.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UiModule } from '@bookorg/ui';

let NavItems: NavBarModel[] = [
    {
        name: "First Link",
        url: "./#"
    },
    {
        name: "Second Link",
        url: "./#2"
    },
    {
        name: "Third Link",
        url: "./#3"
    }
];

export const UserObj = {
    name: "joe nobody",
    title: 'title here'
}

export const NowReading = {
    title: "Title",
    genre: "Genre",
    author: "Author",
    length: 100
}

export const ChartData = {
    data: [
        {
            name: "Altissia",
            value: 10
        },
        {
            name: "Terra",
            value: 20
        }
    ],
    colorScheme: {
        domain: [
            "#101",
            "#C55",
            "#C0FFEE",
            "#bada55"
        ]
    }
}

storiesOf('Templates|Home Page', module)
.addDecorator( 
    moduleMetadata({
        imports: [
            CommonModule,
            BrowserModule,
            HttpClientModule,
            NgxChartsModule,
            AgGridModule.withComponents([]),
            BrowserAnimationsModule,
            UiModule
        ],
        declarations: [
            HomePageWrapperPureComponent,
            
        ]
    })

)
.addDecorator(withKnobs)
.add('Header Default', () => ({
        template: `
                <bookorg-home-page-wrapper-pure 
                    [NavBar]="NavBar"
                    [NowReading]="NowReading"
                    [User]="User"
                    [Title]="Title"
                    [ColumnDefs]="ColumnDefs"
                    [RowData]="RowData"
                    [ChartData]="ChartData"
                >
                </bookorg-home-page-wrapper-pure>
        `,
        props: {
            NavBar: object('Items', NavItems, 'Navigation'),
            User: object('User Information', UserObj, 'User'),
            NowReading: object('Now Reading', NowReading, 'Now Reading'),
            Title: text('title', 'Lorem Ipsum', 'Title'),
            ColumnDefs: object('columnDefs',columnDefs),
            RowData: object('rowData', rowData),
            ChartData: object('chartData', ChartData, 'Pie Chart'),
        }
    })
)