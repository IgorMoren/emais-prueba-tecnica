import { EventEmitter, Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  peliculasActualizadas = new EventEmitter<Movie[]>()

  private readonly key = 'movies';

  guardarDatos(pelicula: Movie): void {
    let peliculas: Movie[] = this.obtenerDatos();
    if (!peliculas) {
      peliculas = [];
    }
    peliculas.push(pelicula);
    localStorage.setItem(this.key, JSON.stringify(peliculas));
  }

  obtenerDatos(): Movie[] {
    const datos = localStorage.getItem(this.key);
    if (!datos) {
      return [];
    }
    return JSON.parse(datos);
  }

  eliminarDatosLocalStorage(id: string) {
    let peliculas: Movie[] = JSON.parse(localStorage.getItem('movies') || '[]');
    peliculas = peliculas.filter(pelicula => pelicula.id !== id);
    localStorage.setItem('movies', JSON.stringify(peliculas));
    this.peliculasActualizadas.emit(peliculas);
  }
}