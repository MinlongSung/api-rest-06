export interface CharacterCollectionApi {
  paginationInfo: PaginationInfo;
  characters: Character[];
}

export interface PaginationInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Character {
  id: number;
  name: string;
  image: string;
  bestSentences: string[];
}
