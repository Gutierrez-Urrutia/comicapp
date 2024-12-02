import { ItemCharacters } from './itemCharacters';

export interface Characters {
    available: number
    collectionURI: string
    items: ItemCharacters[]
    returned: number
  }