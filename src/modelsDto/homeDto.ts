export class HomeDto {
    constructor(public people: string = '',
        public planets: string = '',
        public films: string = '',
        public species: string = '',
        public vehicles: string = '',
        public starships: string = '',) { }
}