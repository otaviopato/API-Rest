import { Router } from 'express';
import { GameController } from '@api-rest/controllers/GameController';

export class GameRoutes {
  public static routePath = '/game'
  public static router = Router();

  public static getAllRoutes() {
    GameRoutes.router.get('/searchById', GameController.getSpecificGame);
    GameRoutes.router.get('', GameController.getAll);
    GameRoutes.router.post('', GameController.createNewGame);
  }

}
