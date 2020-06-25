import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './atoms/label/label.component';
import { InputTextComponent } from './atoms/input-text/input-text.component';
import { PieChartComponent } from './molecules/pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgGridModule } from 'ag-grid-angular';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUi from './+state/ui/ui.reducer';
import { UiEffects } from './+state/ui/ui.effects';
import { TableComponent } from './molecules/table/table.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './molecules/card/card.component';
import { ImageComponent } from './atoms/image/image.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgxChartsModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    StoreModule.forFeature(fromUi.UI_FEATURE_KEY, fromUi.reducer),
    EffectsModule.forFeature([UiEffects]),
  ],
  declarations: [LabelComponent, InputTextComponent, PieChartComponent, TableComponent, CardComponent, ImageComponent],
  exports: [LabelComponent, InputTextComponent, PieChartComponent, TableComponent, CardComponent, ImageComponent],
})
export class UiModule {}
