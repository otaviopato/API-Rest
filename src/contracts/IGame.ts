export interface IGame {
  id: string,
  title: string,
  releaseDate: Date,
  price: IGamePrice,
  createdAt: Date,
  updatedAt: Date,
}

export interface IGamePrice {
  release?: number,
  promo?: number,
  normal: number,
}

export type INewGame = Omit<IGame, 'id' | 'createdAt' | 'updatedAt'>;
