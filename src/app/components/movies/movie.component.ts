import { Component, Input } from "@angular/core";
import { ICharacter } from "src/Interfaces/ICharacter";
import { IMovie } from "src/Interfaces/IMovie";
import { CharactersService } from "src/services/character.service";

@Component({
    selector: 'movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css'],

})
export class MovieComponent {
    constructor(private charactersService: CharactersService) { }

    @Input() movie!: IMovie;
    character!: ICharacter;


    // heroes!: ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa', 'Owen Lars', 'Beru Whitesun lars', 'R5-D4', 'Biggs Darklighter', 'Obi-Wan Kenobi', 'Wilhuff Tarkin', 'Chewbacca', 'Han Solo', 'Greedo', 'Jabba Desilijic Tiure', 'Wedge Antilles', 'Jek Tono Porkins', 'Raymus Antilles'];



}
// https://swapi.dev/api/people/1/
// https://swapi.dev/api/people/2/
// https://swapi.dev/api/people/3/
// https://swapi.dev/api/people/4/
// https://swapi.dev/api/people/5/
// https://swapi.dev/api/people/6/
// https://swapi.dev/api/people/7/
// https://swapi.dev/api/people/8/
// https://swapi.dev/api/people/9/
// https://swapi.dev/api/people/10/
// https://swapi.dev/api/people/12/
// https://swapi.dev/api/people/13/
// https://swapi.dev/api/people/14/
// https://swapi.dev/api/people/15/
// https://swapi.dev/api/people/16/
// https://swapi.dev/api/people/18/
// https://swapi.dev/api/people/19/
// https://swapi.dev/api/people/81/