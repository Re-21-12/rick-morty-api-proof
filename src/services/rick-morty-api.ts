import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/* Un Servicio puede compartir informacion a todos los componentes que lo inyecten */
export class RickMortyApi {
  private httpService = inject(HttpClient);

  private readonly _baseUrl = 'https://rickandmortyapi.com/api/';

  getCharacters(page: number ) {
    return this.httpService.get(`${this._baseUrl}character/?page=${page}`);
  }
}
