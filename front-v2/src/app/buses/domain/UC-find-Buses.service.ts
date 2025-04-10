import { Injectable } from '@angular/core';
import { BusRepository } from '../data/repositories/bus.repository';
import { Bus } from '../data/models/bus.model';
import { BusDTO } from '../data/models/bus-dto.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class FindBusesUseCase {
    constructor(private busRepository: BusRepository) {}

    execute(): Observable<BusDTO[]> {
        return this.busRepository.findAllBuses().pipe(
            map(response => response.map(bus => new BusDTO(bus.idbus, bus.placa, bus.capacidad, bus.choferId)))
        );
    }
}