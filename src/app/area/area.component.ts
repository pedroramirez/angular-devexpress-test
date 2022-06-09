import { Component, OnInit } from '@angular/core';
import { Population, ServiceArea} from '../datas/area-data'

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  populationData: Population[];
  types: string[] = ['area', 'stackedarea', 'fullstackedarea'];

  constructor(service: ServiceArea) {
    this.populationData = service.getPopulationData();
   }

  ngOnInit(): void {
  }

}
