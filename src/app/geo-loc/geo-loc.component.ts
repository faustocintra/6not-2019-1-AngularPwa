import { Component, OnInit } from '@angular/core';
import { GeoLocService } from '../services/geo-loc.service';

@Component({
  selector: 'app-geo-loc',
  templateUrl: './geo-loc.component.html',
  styleUrls: ['./geo-loc.component.sass']
})
export class GeoLocComponent implements OnInit {

  constructor(private geoLocSrv: GeoLocService) { }
  public coords: number[];
  public msgErro: string;

  ngOnInit() {
    try {
      this.coords = this.geoLocSrv.obterCoords();
    } catch (e) {
      this.msgErro = e.message;
    }
  }

}
