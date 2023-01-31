import { Component, OnInit } from '@angular/core'
import { IMovie } from 'src/Interfaces/IMovie';
import { IMoviesList } from 'src/Interfaces/IMoviesList';
import { MoviesService } from 'src/services/movies.service';
import { tap, switchMap } from 'rxjs';
@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css'],
    providers: [MoviesService]
})
export class MoviesComponent implements OnInit {
    constructor(private moviesService: MoviesService) { }

    movies!: IMoviesList;
    currentMovie!: IMovie;
    imagePath: string = 'assets/images/movies/movie';

    ngOnInit(): void {
        this.moviesService.getMovies()
            .subscribe(result => this.movies = result as IMoviesList);
    }

    getMovieInfo(epizode: number) {
        return this.currentMovie = this.movies.results[epizode];
    }
}