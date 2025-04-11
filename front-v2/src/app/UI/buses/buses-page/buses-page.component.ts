import { Component } from '@angular/core';
import { BusRepository } from '../../../buses/data/repositories/bus.repository';
import { Bus } from '../../../buses/data/models/bus.model';

@Component({
  selector: 'app-buses-page',
  templateUrl: './buses-page.component.html',
  styleUrl: './buses-page.component.css'
})
export class BusesPageComponent {

  bus: Bus = {
    Placa: '',
    Capacidad: 0,
    ChoferID: 1,
    Disponible: false
  };

  constructor(private busService: BusRepository) { } 

  registrarBus() {
    this.busService.save(this.bus).subscribe(
      (response) => {
        console.log('Bus registrado con éxito', response);
      },
      (error) => {
        console.error('Error al registrar el bus', error);
    }
 );
}
}
