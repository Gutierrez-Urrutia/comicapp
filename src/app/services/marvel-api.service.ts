import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Observable } from 'rxjs';

export interface Root {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: Data
}

export interface Data {
  offset: number
  limit: number
  total: number
  count: number
  results: Comic[]
}

export interface Comic {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description?: string
  modified: string
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects: TextObject[]
  resourceURI: string
  urls: Url[]
  series: Series
  variants: Variant[]
  collections: Collection[]
  collectedIssues: CollectedIssue[]
  dates: Date[]
  prices: Price[]
  thumbnail: Thumbnail
  images: Image[]
  creators: Creators
  characters: Characters
  stories: Stories
  events: Events
}

export interface TextObject {
  type: string
  language: string
  text: string
}

export interface Url {
  type: string
  url: string
}

export interface Series {
  resourceURI: string
  name: string
}

export interface Variant {
  resourceURI: string
  name: string
}

export interface Collection {
  resourceURI: string
  name: string
}

export interface CollectedIssue {
  resourceURI: string
  name: string
}

export interface Date {
  type: string
  date: string
}

export interface Price {
  type: string
  price: number
}

export interface Thumbnail {
  path: string
  extension: string
}

export interface Image {
  path: string
  extension: string
}

export interface Creators {
  available: number
  collectionURI: string
  items: Item[]
  returned: number
}

export interface Item {
  resourceURI: string
  name: string
  role: string
}

export interface Characters {
  available: number
  collectionURI: string
  items: Item2[]
  returned: number
}

export interface Item2 {
  resourceURI: string
  name: string
}

export interface Stories {
  available: number
  collectionURI: string
  items: Item3[]
  returned: number
}

export interface Item3 {
  resourceURI: string
  name: string
  type: string
}

export interface Events {
  available: number
  collectionURI: string
  items: any[]
  returned: number
}

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  private readonly publicKey: string = '25b549a03b895b3b9ae43d28941a9c53';
  private readonly privateKey: string = 'cb87d2e6e08c089e42cf4b339f09341842e13755';
  private readonly timestamp: any = new Date().getTime();
  private readonly hash: string = CryptoJS.MD5(this.timestamp + this.privateKey + this.publicKey).toString();
  private readonly apiUrl: string = 'https://gateway.marvel.com:443/v1/public/comics';
  private readonly url: string = this.apiUrl + `?ts=${this.timestamp}&apikey=${this.publicKey}&hash=${this.hash}`;  
  
  constructor(private readonly http: HttpClient) { }

  obtenerComics(): Observable<any> {
    return this.http.get<any>(this.url);

  }
} 
