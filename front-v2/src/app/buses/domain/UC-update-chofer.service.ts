import { Injectable } from '@angular/core';
import { BusRepository } from '../data/repositories/bus.repository';
import { Bus } from '../data/models/bus.model';
import { BusDTO } from '../data/models/bus-dto.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class UpdateChoferUseCase {
    constructor(private busRepository: BusRepository) {}

    execute(idBus: number, bus: Bus): Observable<BusDTO | null> {
        return this.busRepository.updateById(idBus, bus).pipe(
            map(response => response ? new BusDTO(response.idbus, response.placa, response.capacidad, response.choferId) : null)
        );
    }
}