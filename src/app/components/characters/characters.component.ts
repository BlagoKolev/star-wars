import { Component, OnInit } from "@angular/core";
import { ICharacter } from "src/Interfaces/ICharacter";
import { ICharactersPageModel } from "src/Interfaces/ICharactersPageModel";
import { CharactersService } from "src/services/character.service";
import { Url } from "src/constants/url";

@Component({
    selector: 'characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
    constructor(private characterService: CharactersService, private urlConstants: Url) { }

    characters!: ICharactersPageModel;
    pageNumber: number = 1;

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
}