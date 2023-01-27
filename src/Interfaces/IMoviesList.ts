import {IMovie} from './IMovie'
export interface IMoviesList{
    
	count: number,
	next: string,
	previous: string,
	results: IMovie[]
}