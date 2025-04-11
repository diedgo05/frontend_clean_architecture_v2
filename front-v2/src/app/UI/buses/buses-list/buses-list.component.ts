import { Component, OnInit, OnDestroy } from '@angular/core';
import { BusRepository } from '../../../buses/data/repositories/bus.repository';
import { Bus } from '../../../buses/data/models/bus.model';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-buses-list',
  templateUrl: './buses-list.component.html',
  styleUrls: ['./buses-list.component.css']
})
export class BusesListComponent implements OnInit, OnDestroy {
  buses: Bus[] = [];
  private pollingSubscription?: Subscription;

  constructor(private busRepository: BusRepository) {}

  ngOnInit(): void {
    this.startPolling();
  }

  ngOnDestroy(): void {
    this.stopPolling();
  }

  startPolling(): void {
    const initialDelay = 8000;
    const pollingInterval = 8000;

    this.pollingSubscription = timer(initialDelay, pollingInterval).subscribe(() => {
      this.getBuses();
    });
  }

  stopPolling(): void {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }

  getBuses(): void {
    this.busRepository.findAllBuses().subscribe(
      (data) => {
        if (!this.areEqual(this.buses, data)) {
          console.log('Actualizando lista de buses');
          this.buses = data;
        } else {
          console.log('No hay cambios en la lista de buses');
        }
      },
      (error) => {
        console.error('Error al obtener los buses:', error);
      }
    );
  }

  // Compara si dos listas de buses son iguales (puedes personalizar esto más)
  private areEqual(arr1: Bus[], arr2: Bus[]): boolean {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }
}
