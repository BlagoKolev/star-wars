import { Injectable } from "@angular/core"

@Injectable()
export class Url {
    base: string = 'https://swapi.dev/api/'

    shipsUrl: string = 'https://swapi.dev/api/starships/?page=';

    shipsFirstPage: string = 'https://swapi.dev/api/starships/'
    shipsSecondPage: string = 'https://swapi.dev/api/starships/?page=2'
    shipsThirdPage: string = 'https://swapi.dev/api/starships/?page=3'
    shipsFourthPage: string = 'https://swapi.dev/api/starships/?page=4'

    moviesUrl: string = 'https://swapi.dev/api/films';

    charactersPageUrl: string = 'https://swapi.dev/api/people/?page=';
    characterPersonalUrl: string = 'https://swapi.dev/api/people/';
    charactersPerPage: number = 10;
}
