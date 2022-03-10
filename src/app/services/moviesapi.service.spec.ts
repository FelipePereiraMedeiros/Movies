import { HttpClient} from '@angular/common/http';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MoviesapiService } from './moviesapi.service';

describe('MoviesapiService', () => {
  let service: MoviesapiService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(MoviesapiService);
    http = TestBed.inject(HttpClient);
  });

  it('Serviço criado com sucesso', () => {
    expect(service).toBeTruthy();
  });

  it('Recuperar dados da listagem dos filmes corretamente', ()=>{
    const spy = spyOn(http, 'get').and.callThrough();
    service.getMovieData(0,15,true,1980);
    expect(spy).toHaveBeenCalledWith('https://tools.texoit.com/backend-java/api/movies?page=0&size=15&winner=true&year=1980');
    service.getMovieData(0,15,true);
    expect(spy).toHaveBeenCalledWith('https://tools.texoit.com/backend-java/api/movies?page=0&size=15&winner=true');
    service.getMovieData(0,15);
    expect(spy).toHaveBeenCalledWith('https://tools.texoit.com/backend-java/api/movies?page=0&size=15');
    service.getMovieData(0,15,undefined,1980);
    expect(spy).toHaveBeenCalledWith('https://tools.texoit.com/backend-java/api/movies?page=0&size=15&year=1980');
  });

  it('Recuperar anos com múltiplos vencedores corretamente', ()=>{
    const spy = spyOn(http, 'get').and.callThrough();
    service.getMultipleWinnersYear();
    expect(spy).toHaveBeenCalledWith('https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners');
  });

  it('Recuperar estúdios com múltiplas vitórias corretamente', ()=>{
    const spy = spyOn(http, 'get').and.callThrough();
    service.getStudiosWithWinCount();
    expect(spy).toHaveBeenCalledWith('https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count');
  });

  it('Recuperar os maiores e menores intervalos entre premiações corretamente', ()=>{
    const spy = spyOn(http, 'get').and.callThrough();
    service.getAwardsInterval();
    expect(spy).toHaveBeenCalledWith('https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers');
  });
  
  it('Recuperar vencedores pelo ano corretamente', ()=>{
    const spy = spyOn(http, 'get').and.callThrough();
    service.getMoviesByYear(true,1980);
    expect(spy).toHaveBeenCalledWith('https://tools.texoit.com/backend-java/api/movies?winner=true&year=1980');
  });
});
