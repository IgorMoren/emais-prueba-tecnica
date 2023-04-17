import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];

  isLoading: boolean = false;

  notFound: boolean = false

  searchInputValue: string = '';

  constructor( private moviesService: MoviesService, private localStorageService: LocalStorageService ) { }

  ngOnInit(): void { 
    this.localStorageService.peliculasActualizadas.subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  getMoviesData(movies: string){
    this.searchInputValue = movies;
    this.notFound = false;
    this.isLoading = true;
    this.moviesService.searchMovies(movies).subscribe((data)=> {
      if (data.results.length === 0) {        
        this.isLoading = false;
        this.notFound = true;
      }      
      this.movies = data.results.map((movie: Movie) => {
        this.isLoading = false;
        return {
          id: movie.id,
          title: movie.title,
          poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          release_date: movie.release_date,
        }
      })
    })
  }
}
