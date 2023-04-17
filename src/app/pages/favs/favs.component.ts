import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.scss']
})
export class FavsComponent implements OnInit {

  isLoading: boolean = false;

  movies: Movie[] = [];

  constructor( private localStorageService: LocalStorageService ) { }

  ngOnInit(): void {   
    this.getMoviesData();
    this.localStorageService.peliculasActualizadas.subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }
  getMoviesData(){
    this.isLoading = true;
    this.movies = this.localStorageService.obtenerDatos();
    this.isLoading = false;
  }

}
