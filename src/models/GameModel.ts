import { Log } from '@api-rest/utils/Log';
import { IGame, INewGame } from '@api-rest/contracts/IGame';
import { v4 as uuidv4 } from 'uuid';

export class GameModel {
  public static simulatedDatabase: IGame[] = [
    {
      id: '82f76d36-2be3-4103-aa27-af6e532259e6',
      price: {
        normal: 300.00,
        promo: 150.00,
        release: 500.00,
      },
      releaseDate: new Date('2010-01-01T00:00:00.00Z'),
      title: 'Grand Theft Auto V',
      createdAt: new Date('1999-01-29T00:00:00.00Z'),
      updatedAt: new Date('2010-01-01T00:00:00.00Z'),
    },
    {
      id: '171e7220-aaf6-4456-896d-e935b4988f80',
      price: {
        normal: 100.00,
        promo: 50.00,
        release: 150.00,
      },
      releaseDate: new Date('1991-01-01T00:00:00.00Z'),
      title: 'Sonic the Hedgehog',
      createdAt: new Date('1999-01-29T00:00:00.00Z'),
      updatedAt: new Date('2010-01-01T00:00:00.00Z'),
    },
    {
      id: '27305636-63c9-471a-8496-d511594e9963',
      price: {
        normal: 75.00,
        promo: 45.50,
        release: 100.00,
      },
      releaseDate: new Date('1987-02-20T00:00:00.00Z'),
      title: 'Contra II',
      createdAt: new Date('1999-01-29T00:00:00.00Z'),
      updatedAt: new Date('2010-01-01T00:00:00.00Z'),
    },
    {
      id: 'bf5dd636-45e8-4ad4-85b8-34740a9b96b1',
      price: {
        normal: 250.00,
        promo: 150.00,
        release: 500.00,
      },
      releaseDate: new Date('2021-11-21T00:00:00.00Z'),
      title: 'Forza Horizon 5',
      createdAt: new Date('1999-01-29T00:00:00.00Z'),
      updatedAt: new Date('2010-01-01T00:00:00.00Z'),
    },
  ];

  public static async getBySpecificId(id: string): Promise<IGame|undefined> {
    const response = GameModel.simulatedDatabase.filter((game) => game.id == id);
    if (response.length > 0) {
      return response[0];
    }
    return undefined;
  }

  public static async getAll(): Promise<IGame[]|undefined> {
    const response = GameModel.simulatedDatabase;
    if(response.length > 0){
      return response;
    }
    return undefined;
  }

  public static async createGame(newGame: INewGame): Promise<IGame>{
    const newGameData: IGame = {
      ...newGame,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    GameModel.simulatedDatabase.push(newGameData);
    return newGameData;
  }
}
