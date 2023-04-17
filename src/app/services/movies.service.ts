import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiBaseUrl = 'https://api.themoviedb.org/3/';
  private apiKey = '8f781d70654b5a6f2fa69770d1d115a3';

  constructor(private http: HttpClient) { }

  searchMovies(query: string): Observable<any> {
    const url = `${this.apiBaseUrl}search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<Movie[]>(url);
  }
}
