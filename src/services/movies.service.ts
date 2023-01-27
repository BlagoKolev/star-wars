import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from '../constants/url';

@Injectable()
export class MoviesService {
    constructor(private httpClient: HttpClient, private url:Url) { }

    getMovies(){
        return this.httpClient.get(this.url.moviesUrl);
    }
}