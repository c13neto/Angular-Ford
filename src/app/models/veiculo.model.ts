import { Vehicle } from './../services/vehicle';
export interface Veiculos extends Array<Veiculo> {}

export interface Veiculo{
  id: number | string
  vehicle: string
  volumetotal: number | string
  connected: number | string
  softwareUpdates: number | string
  img: string
}

export interface VeiculosAPI {
  vehicles: Veiculos;
}
export interface VehicleData{
  id: number | string
  vin: string | string
  odometro: number | string
  nivelCombustivel: number | string
  status: string
  lat: number | string
  long: number | string
}
