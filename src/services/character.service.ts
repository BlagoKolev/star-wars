import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharactersService {
    constructor(private httpClient: HttpClient) { }


    getCharacter(url: string) {
        return this.httpClient.get(url)
    }

    getAllCharactersByPage(url: string) {
        return this.httpClient.get(url);
    }
}
