import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Winneryears } from "src/app/classes/winneryears";
import { Interval } from '../classes/interval';
import { Content, MovieData } from '../classes/moviedata';
import { Studios } from '../classes/studios';

@Injectable({
  providedIn: 'root'
})

export class MoviesapiService {
  API = 'https://tools.texoit.com/backend-java/api/movies';

  options = { headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),withCredentials: true};
  
  constructor(private http : HttpClient){}
  
  /*
  * Função para recuperar dados da listagem dos filmes.
  * Parâmetros: page : number, size: number, winner: boolean, year: number
  */
  getMovieData(page : number, size: number, winner?: boolean, year?: number){
    return this.http.get<MovieData>(
        `${this.API}?page=${page}&size=${size}` 
        + (winner != undefined && winner != null? `&winner=${winner}` : "") 
        + (year != undefined && year != null ? `&year=${year}` : "")
      );
  }
 
  /*
  * Função para recuperar anos com múltiplos vencedores.
  */
  getMultipleWinnersYear(){
    return this.http.get<Winneryears>(`${this.API}?projection=years-with-multiple-winners`);
  }

  /*
  * Função para recuperar estúdios com múltiplas vitórias.
  */
  getStudiosWithWinCount(){
    return this.http.get<Studios>(`${this.API}?projection=studios-with-win-count`);
  }

  /*
  * Função para recuperar os maiores e menores intervalos entre premiações.
  */
  getAwardsInterval(){
    return this.http.get<Interval>(`${this.API}?projection=max-min-win-interval-for-producers`);
  }

  /*
  * Função para recuperar vencedores pelo ano.
  * Parâmetros: winner: boolean, year: number
  */
  getMoviesByYear(winner: boolean, year: number){
    return this.http.get<Content[]>(`${this.API}?winner=${winner}&year=${year}`);
  }
}