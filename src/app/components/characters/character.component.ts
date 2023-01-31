import { Component, Input } from "@angular/core";
import { ICharacter } from "src/Interfaces/ICharacter";

@Component({
    selector: 'character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css']
})
export class CharacterComponent {
    @Input() character!: ICharacter;
}