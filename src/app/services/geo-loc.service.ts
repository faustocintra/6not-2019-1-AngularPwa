import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoLocService {

  constructor() { }

  obterCoords(): number[] {

    let result: number[];

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          result = [pos.coords.latitude, pos.coords.longitude];
        },
        erro => {
          throw erro;
        }
      );
    } else {
      throw new Error('Geolocalização não suportada');
    }
    return result;
  }
}
