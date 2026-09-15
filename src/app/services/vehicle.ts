import { VehicleData } from './../models/veiculo.model';
import { Injectable } from '@angular/core';
import { VeiculosAPI } from '../models/veiculo.model';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Vehicle {
  private apiUrl = "http://localhost:3001";

  constructor(private http:HttpClient){}

  getVeiculos(): Observable<VeiculosAPI>{
    return this.http.get<VeiculosAPI>(`${this.apiUrl}/vehicles`);
  }
  getVehicleData(vin: string): Observable<VehicleData> {
    return this.http.post<VehicleData>(`${this.apiUrl}/vehicleData`, { vin });
  }
}
