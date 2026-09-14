import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../../services/vehicle';
import { Menu } from '../../components/menu/menu';
import { Veiculo } from '../../models/veiculo.model';

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

  constructor(private veiculoService: Vehicle) {}

  ngOnInit(): void {
    this.veiculoService.getVeiculos().subscribe(
      (response) => {
        this.veiculos = response.vehicles;
      }
    );
  }

  veiculoEscolhido(event: Event): void {
    const idSelecionado = (event.target as HTMLSelectElement).value;
    if (idSelecionado) {
      this.veiculoSelecionado = this.veiculos.find(v => v.id == Number(idSelecionado)) || null;
    } else {
      this.veiculoSelecionado = null;
    }
  }
}
