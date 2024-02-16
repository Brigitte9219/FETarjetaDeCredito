import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  myAppUrl = 'https://localhost:7083/';
  myApiUrl = 'api/tarjeta/'

  constructor( private http:HttpClient) { }
}
