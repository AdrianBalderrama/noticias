import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment} from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
})

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { }

  private ejecutarQuery<T>(query : string){
    query= apiUrl+ query;
    return this.http.get<T>(query, {headers});
  }

  getTopHeadlines(){
    return this.ejecutarQuery<RespuestaTopHeadlines>('/top-headlines?country=mx');
  // return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?country=mx&apiKey=a92ff2b8cb314667a0262fca609fe4c5')
  }

  getTopHeadlinesCategoria( categoria: string){
    //return console.log("this.ejecutarQuery('/top-headlines?country=US')")

    return this.ejecutarQuery<RespuestaTopHeadlines>('/top-headlines?country=mx&category='+(categoria));
   }



}
