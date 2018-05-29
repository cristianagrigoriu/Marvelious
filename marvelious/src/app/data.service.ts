import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import { HttpClient } from '@angular/common/http';
import { Hero } from './model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private publicKey: string = 'eaa146cbb19a4d766eaa8f9bb7aa7ac3';
  private privateKey: string = '8e70881b65513e9d6b76dc7823da632374c9780e';
  public limit: number = 30;

  events: Hero[];

  constructor(private http: HttpClient) {
  }

  getEvents(offset: number = 0):Observable<Hero[]>{
    return this.http.get(`https://gateway.marvel.com:443/v1/public/events?orderBy=-startDate&limit=${this.limit}&offset=${offset}&apikey=${this.publicKey}`).pipe(map((res:any)=>res.data.results));
  }

  getComics(offset: number = 0):Observable<Hero[]>{
    return this.http.get(`https://gateway.marvel.com:443/v1/public/comics?orderBy=-onsaleDate&limit=${this.limit}&offset=${offset}&apikey=${this.publicKey}`).pipe(map((res:any)=>res.data.results));
  }

  getHeroes(offset: number = 0):Observable<Hero[]>{
    return this.http.get(`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=${this.limit}&offset=${offset}&apikey=${this.publicKey}`).pipe(map((res:any)=>res.data.results));
  }
}
