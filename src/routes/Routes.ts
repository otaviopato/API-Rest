import { Router } from "express";
import { GameRoutes } from "./GameRoutes";

export class Routes {
  public static routePath = '/api/v1';
  public static router = Router();

  public static getAllRoutes() {
    GameRoutes.getAllRoutes();
    Routes.router.use(GameRoutes.routePath, GameRoutes.router);
  }
}
