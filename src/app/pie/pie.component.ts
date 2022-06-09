import { Component, OnInit } from '@angular/core';
import { ServicePie, Area} from '../datas/pie-data';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  areas: Area[];

  constructor(service: ServicePie) {
    this.areas = service.getAreas();
   }

  ngOnInit(): void {
  }
  pointClickHandler(e: any) {
    this.toggleVisibility(e.target);
  }

  legendClickHandler(e: any) {
    const arg = e.target;
    const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }

  toggleVisibility(item: any) {
    if (item.isVisible()) {
      item.hide();
    } else {
      item.show();
    }
  }

}
