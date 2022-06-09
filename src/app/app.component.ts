import { NgModule, Component, enableProdMode } from '@angular/core';
import { Data, Service } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSource: Data[];

  constructor(service: Service) {
    this.dataSource = service.getData();
  }
}

