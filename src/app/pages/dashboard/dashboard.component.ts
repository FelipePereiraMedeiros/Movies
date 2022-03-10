import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Interval } from 'src/app/classes/interval';
import { Content } from 'src/app/classes/moviedata';
import { Studios } from 'src/app/classes/studios';
import { Winneryears } from 'src/app/classes/winneryears';
import { MoviesapiService } from 'src/app/services/moviesapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //Variáveis de filtragem
  yearfilter?: number;
  
  //Listagens dos quadros 
  winnerYears? : Winneryears = {years: []};
  studios? : Studios = {studios:[]};
  interval? : Interval = {min: [], max: []};
  byyear? : Content[] = [];
  
  constructor(private moviesApiService : MoviesapiService) { }

  ngOnInit(): void {
    //Iniciar quadro de anos com múltiplos vencedores 
    this.moviesApiService.getMultipleWinnersYear().subscribe(
      retorno=>{
        this.winnerYears = retorno;
      }, error=>{
        console.log(error);
      }
    )
    //Iniciar quadro de estudios com múltiplas vitórias 
    this.moviesApiService.getStudiosWithWinCount().subscribe(
      retorno=>{
        this.studios = retorno;
      }, error=>{
        console.log(error);
      }
    )
    //Iniciar quadro dos maiores e menores intervalos entre premiações
    this.moviesApiService.getAwardsInterval().subscribe(
      retorno=>{
        this.interval = retorno;
      }, error=>{
        console.log(error);
      }
    )
  }

  /*Função de busca por vencedores pelo ano*/
  searchByYear(){
    //Caso o ano buscado seja inferior à 1980 não existe a necessidade de contatar a API, pois não existem registros anteriores à 1980
    if(this.yearfilter != null && this.yearfilter >= 1980){
      this.moviesApiService.getMoviesByYear(true, this.yearfilter).subscribe(
        retorno=>{
          this.byyear = retorno;
        }
      )
    }else{
      this.yearfilter = undefined;
      this.byyear = [];
    }
  }

}
