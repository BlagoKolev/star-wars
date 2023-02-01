import { Component, OnInit } from "@angular/core";
import { ICharacter } from "src/Interfaces/ICharacter";
import { ICharactersPageModel } from "src/Interfaces/ICharactersPageModel";
import { CharactersService } from "src/services/character.service";
import { Url } from "src/constants/url";
import { Observable, switchMap, tap, map } from "rxjs";

@Component({
    selector: 'characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
    constructor(private characterService: CharactersService, private urlConstants: Url) { }

    characters!: ICharactersPageModel;
    pageNumber: number = 1;
    currentCharacter!: ICharacter;

    ngOnInit(): void {
        this.loadPageData(1);
    }

    loadPreviousPage() {
        this.pageNumber--;
        this.loadPageData(this.pageNumber);
    }
    loadNextPage() {
        this.pageNumber++;
        this.loadPageData(this.pageNumber);
    }

    loadPageData(pageNumber: number) {
        this.characterService
            .getAllCharactersByPage(this.urlConstants.charactersPageUrl + (this.pageNumber))
            .subscribe(characters => this.characters = characters as ICharactersPageModel)
    }

    loadCharacterInfo(index: number, homeworld:string) {
        let characterId = ((this.pageNumber * this.urlConstants.charactersPerPage) - 10 + index + 1);
        if (characterId >= 17) {
            characterId++;
        } //That is because Id=17 is missing in Api Database.

        this.characterService.getCharacter(this.urlConstants.characterPersonalUrl + characterId)
            .pipe(
                switchMap(character => this.characterService.getCharacter(homeworld)
                    .pipe(map(homeworld => ({ ...character, homeworld }))
                    )),
            ).subscribe(character => this.currentCharacter = character as ICharacter);
    }
}