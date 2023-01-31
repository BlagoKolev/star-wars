import { ICharacter } from "./ICharacter";

export interface ICharactersPageModel {
    count: number,
    next: string,
    previous: string,
    results: ICharacter[]
}