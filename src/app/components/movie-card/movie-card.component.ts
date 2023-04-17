import { ApplicationRef, Component, Input } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  
  @Input() data!: Movie;

  @Input() isFavorite: boolean = false;

  constructor( private localStorageService: LocalStorageService, private appRef: ApplicationRef ){ }

  saveDataInLocalStorage(){
    if (!this.isFavorite) {
      this.localStorageService.guardarDatos(this.data);      
    } else {
      this.localStorageService.eliminarDatosLocalStorage(this.data.id);     
    }
  }
}
