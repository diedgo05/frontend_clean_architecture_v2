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
    private apiUrl = 'http://localhost:8080/buses/';

    constructor(private http: HttpClient) {}

    save(bus: Bus): Observable<Bus | null> {
        return this.http.post<Bus>(this.apiUrl, {
            placa: bus.Placa,
            capacidad: bus.Capacidad,
            choferId: bus.ChoferID,
            disponible: bus.Disponible,
        }, {
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        }).pipe(
            catchError(() => of(null))
        );
    }

    findAllBuses(): Observable<Bus[]> {
        return this.http.get<Bus[]>(this.apiUrl);  // Asegúrate de que la respuesta sea de tipo Bus[]
      }
    

    findBusByIdChofer(choferId: number): Observable<BusDTO[]> {
        return this.http.get<BusDTO[]>(`${this.apiUrl}${choferId}`);
    }

    updateById(idBus: number, bus: Bus): Observable<BusDTO | null> {
        return this.http.put<BusDTO>(`${this.apiUrl}${idBus}`, bus).pipe(
            catchError(() => of(null))
        );
    }

    deleteById(idBus: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}${idBus}`).pipe(
            catchError(() => of(void 0)),
        );
    }
}