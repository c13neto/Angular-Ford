import { Injectable } from '@angular/core';
import { VeiculosAPI } from '../models/veiculo.model';
import { Observable } from 'rxjs';
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

}
