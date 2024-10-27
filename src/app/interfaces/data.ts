import { Comic } from './comic';

export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
}
