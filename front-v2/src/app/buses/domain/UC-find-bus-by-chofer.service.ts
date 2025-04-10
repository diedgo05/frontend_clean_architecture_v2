import { Injectable } from '@angular/core';
import { BusRepository } from '../data/repositories/bus.repository';
import { BusDTO } from '../data/models/bus-dto.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class FindBusByChoferUseCase {
    constructor(private busRepository: BusRepository) {}

    execute(choferId: number): Observable<BusDTO[]> {
        return this.busRepository.findBusByIdChofer(choferId).pipe(
            map(response => response.map(bus => new BusDTO(bus.idbus, bus.placa, bus.capacidad, bus.choferId)))
        );
    }
}