import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../../services/vehicle';
import { Menu } from '../../components/menu/menu';
import { VehicleData, Veiculo } from '../../models/veiculo.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Menu, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  veiculos: Veiculo[] = [];
  veiculoSelecionado: Veiculo | null = null;
  dadosVeiculo: VehicleData | null = null;

  private vinMap: Record<number, string> = {
    1: '2FRHDUYS2Y63NHD22454', // Ranger
    2: '2RFAASDY54E4HDU34874', // Mustang
    3: '2FRHDUYS2Y63NHD22455', // Territory
    4: '2RFAASDY54E4HDU34875', // Bronco Sport
  };

  constructor(private veiculoService: Vehicle) {}

  ngOnInit(): void {
    this.veiculoService.getVeiculos().subscribe({
      next: (response) => (this.veiculos = response.vehicles),
      error: (err) => console.error('Erro ao buscar lista de veículos:', err),
    });
  }

  veiculoEscolhido(event: Event): void {
    const idSelecionado = Number((event.target as HTMLSelectElement).value);

    if (!idSelecionado) {
      this.veiculoSelecionado = null;
      this.dadosVeiculo = null;
      return;
    }

    this.veiculoSelecionado = this.veiculos.find((v) => v.id === idSelecionado) || null;
    const vin = this.vinMap[idSelecionado];

    if (vin) {
      this.veiculoService.getVehicleData(vin).subscribe({
        next: (data) => {
          this.dadosVeiculo = { ...data, vin };
        },
        error: (err) => console.error('Erro ao buscar telemetria do veículo:', err),
      });
    }
  }
}
