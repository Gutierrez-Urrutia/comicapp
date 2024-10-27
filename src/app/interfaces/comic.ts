import { TextObject } from './textObject';
import { Url } from './url';
import { Series } from './series';
import { Variant } from './variant';
import { Collection } from './collection';
import { CollectedIssue } from './collectedIssue';
import { Date } from './date';
import { Price } from './price';
import { Thumbnail } from './thumbnail';
import { Image } from './image';
import { Creators } from './creators';
import { Characters } from './characters';
import { Stories } from './stories';
import { Events } from './events';

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