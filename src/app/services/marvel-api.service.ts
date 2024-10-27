import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class MarvelApiService {
  private readonly publicKey: string = '25b549a03b895b3b9ae43d28941a9c53';
  private readonly privateKey: string =
    'cb87d2e6e08c089e42cf4b339f09341842e13755';
  private readonly timestamp: any = new Date().getTime();
  private readonly hash: string = CryptoJS.MD5(
    this.timestamp + this.privateKey + this.publicKey
  ).toString();
  private readonly apiUrl: string =
    'https://gateway.marvel.com:443/v1/public/comics';
  private readonly url: string =
    this.apiUrl +
    `?ts=${this.timestamp}&apikey=${this.publicKey}&hash=${this.hash}`;

  constructor(private readonly http: HttpClient) {}

  obtenerComics(): Observable<Response> {
    return this.http.get<Response>(this.url);
  }
}
