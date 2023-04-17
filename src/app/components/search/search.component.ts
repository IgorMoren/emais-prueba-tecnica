import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild(MatInput) searchInput!: MatInput;

  @Output() moviesEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitData(){
    const searchValue = this.searchInput.value;
    this.moviesEmitter.emit(searchValue)
  }

}
