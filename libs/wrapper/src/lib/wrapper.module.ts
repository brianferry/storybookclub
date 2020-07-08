import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageWrapperComponent } from "./home-page-wrapper/home-page-wrapper.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromWrapper from "./+state/wrapper/wrapper.reducer";
import { UiModule } from '@bookorg/ui';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageWrapperPureComponent } from './home-page-wrapper-pure/home-page-wrapper-pure.component';
import { WrapperEffects } from './+state/wrapper/wrapper.effects';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgxChartsModule,
    AgGridModule.withComponents([]),
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromWrapper.WRAPPER_FEATURE_KEY, fromWrapper.reducer),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([WrapperEffects]),
    BrowserAnimationsModule,
    UiModule
  ],
  declarations: [HomePageWrapperComponent, HomePageWrapperPureComponent],
  exports: [HomePageWrapperComponent],
})
export class WrapperModule {}
