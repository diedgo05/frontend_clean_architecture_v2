export class BusDTO {
    constructor(
        public Idbus: number,
        public Placa: string,
        public Capacidad: number,
        public Disponible: boolean,
        public ChoferID: number,
    ) {}
}