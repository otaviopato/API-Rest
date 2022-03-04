import { Router } from 'express';
import { GameRoutes } from '@api-rest/routes/GameRoutes';

export class Routes {
  public static routePath = '/api/v1';
  public static router = Router();

  public static getAllRoutes() {
    GameRoutes.getAllRoutes();
    Routes.router.use(GameRoutes.routePath, GameRoutes.router);
  }
}
