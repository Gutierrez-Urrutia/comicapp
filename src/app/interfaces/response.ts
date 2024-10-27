import { Data } from './data';

export interface Response {
    code: number
    status: string
    copyright: string
    attributionText: string
    attributionHTML: string
    etag: string
    data: Data
  }