import { ItemCreators } from './itemCreators';
export interface Creators {
    available: number
    collectionURI: string
    items: ItemCreators[]
    returned: number
  }