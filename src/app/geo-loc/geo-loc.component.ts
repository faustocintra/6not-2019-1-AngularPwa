import { Component, OnInit } from '@angular/core';
import { GeoLocService } from '../services/geo-loc.service';

@Component({
  selector: 'app-geo-loc',
  templateUrl: './geo-loc.component.html',
  styleUrls: ['./geo-loc.component.sass']
})
export class GeoLocComponent implements OnInit {

  FATEC_LATITUDE = -20.514388949147456;
  FATEC_LONGITUDE = -47.400083541870124;

  constructor(private geoLocSrv: GeoLocService) { }
  public pos: any;
  public dist: number;
  public msgErro: string;

  async ngOnInit() {
    try {
      this.pos = await this.geoLocSrv.obterPos();
      this.dist = this.geoLocSrv.distancia(this.pos.coords.latitude, this.pos.coords.longitude, this.FATEC_LATITUDE, this.FATEC_LONGITUDE);
      console.log(this.pos);
    } catch (e) {
      console.error(e);
      this.msgErro = e;
    }
  }

}
