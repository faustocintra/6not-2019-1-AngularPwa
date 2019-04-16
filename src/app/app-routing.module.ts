import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LeitorQrCodeComponent } from './leitor-qr-code/leitor-qr-code.component';
import { GeoLocComponent } from './geo-loc/geo-loc.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'leitor-qr-code', component: LeitorQrCodeComponent },
  { path: 'geo-loc', component: GeoLocComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
