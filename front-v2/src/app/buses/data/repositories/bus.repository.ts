import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from '../models/bus.model';
import { BusDTO } from '../models/bus-dto.model';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BusRepository {
    private apiUrl = 'http://localhost:8080/buses';

    constructor(private http: HttpClient) {}

    save(bus: Bus): Observable<BusDTO | null> {
        return this.http.post<BusDTO>(this.apiUrl, {
            placa: bus.placa,
            capacidad: bus.capacidad,
            choferId: bus.choferId
        }, {
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        }).pipe(
            catchError(() => of(null))
        );
    }

    findAllBuses(): Observable<BusDTO[]> {
        return this.http.get<BusDTO[]>(this.apiUrl);
    }

    findBusByIdChofer(choferId: number): Observable<BusDTO[]> {
        return this.http.get<BusDTO[]>(`${this.apiUrl}/${choferId}`);
    }

    updateById(idBus: number, bus: Bus): Observable<BusDTO | null> {
        return this.http.put<BusDTO>(`${this.apiUrl}/${idBus}`, bus).pipe(
            catchError(() => of(null))
        );
    }

    deleteById(idBus: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${idBus}`).pipe(
            catchError(() => of(void 0)),
        );
    }
}