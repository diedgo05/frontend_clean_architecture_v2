import { Injectable } from '@angular/core';
import { BusRepository } from '../data/repositories/bus.repository';
import { BusDTO } from '../data/models/bus-dto.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class DeleteChoferUseCase {
    constructor(private busRepository: BusRepository) {}

    execute(choferId: number): Observable<void> {
        return this.busRepository.deleteById(choferId)
    }
}