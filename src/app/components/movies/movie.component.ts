import { Component, Input } from "@angular/core";
import { IMovie } from "src/Interfaces/IMovie";

@Component({
    selector: 'movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent {
    @Input() movie!: IMovie;

    getHero(url:string){
        
    }
}