import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { LabelComponent } from "./atoms/label/label.component";
import { InputTextComponent } from "./atoms/input-text/input-text.component";
import { PieChartComponent } from "./molecules/pie-chart/pie-chart.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AgGridModule } from "ag-grid-angular";

import { TableComponent } from "./molecules/table/table.component";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./molecules/card/card.component";
import { ImageComponent } from "./atoms/image/image.component";
import { HeaderComponent } from "./organisms/header/header.component";
import { LinkComponent } from "./atoms/link/link.component";
import { HeadingComponent } from "./atoms/heading/heading.component";
import { PageTitleComponent } from "./molecules/page-title/page-title.component";
import { NowReadingComponent } from "./organisms/now-reading/now-reading.component";


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgxChartsModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
  ],
  declarations: [
    LabelComponent,
    InputTextComponent,
    PieChartComponent,
    TableComponent,
    CardComponent,
    ImageComponent,
    HeaderComponent,
    LinkComponent,
    HeadingComponent,
    PageTitleComponent,
    NowReadingComponent
  ],
  exports: [
    LabelComponent,
    InputTextComponent,
    PieChartComponent,
    TableComponent,
    CardComponent,
    ImageComponent,
    HeaderComponent,
    LinkComponent,
    HeadingComponent,
    PageTitleComponent,
    NowReadingComponent
  ],
})
export class UiModule {}
