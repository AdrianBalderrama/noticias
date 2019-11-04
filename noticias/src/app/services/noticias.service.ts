import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { 

    
  }
  getTopHeadlines(){
   return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?country=mx&apiKey=a92ff2b8cb314667a0262fca609fe4c5')
  }
}
