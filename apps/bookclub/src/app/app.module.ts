import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { AgGridModule } from "ag-grid-angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { WrapperModule } from 'libs/wrapper/src/lib/wrapper.module';
import * as fromWrapper from "../../../../libs/wrapper/src/lib/+state/wrapper/wrapper.reducer";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WrapperEffects } from 'libs/wrapper/src/lib/+state/wrapper/wrapper.effects';
import * as config from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    WrapperModule,
    CommonModule,
    BrowserModule,
    NgxChartsModule,
    AgGridModule.withComponents([]),
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromWrapper.WRAPPER_FEATURE_KEY, fromWrapper.reducer),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([WrapperEffects]),
    BrowserAnimationsModule,
  ],
  providers: 
  [
    {
        provide: "_urlRoot", 
        useValue: config.environment.apiUrl
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
