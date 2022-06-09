import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxChartModule, DxPieChartModule, DxSelectBoxModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Service } from './app.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AreaComponent } from './area/area.component';
import { ServiceArea } from './datas/area-data';
import { PieComponent } from './pie/pie.component';
import { ServicePie } from './datas/pie-data';

@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxChartModule,
    DxSelectBoxModule,
    DxPieChartModule
  ],
  providers: [Service, ServiceArea, ServicePie],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);