import { ItemStories } from './itemStories';

export interface Stories {
    available: number
    collectionURI: string
    items: ItemStories[]
    returned: number
  }