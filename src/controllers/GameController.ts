import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from '@api-rest/constants/HttpStatus';
import { GameModel } from '@api-rest/models/GameModel';
import { INewGame } from '@api-rest/contracts/IGame';
import { Validator } from 'node-input-validator';

export class GameController {
  public static async getSpecificGame(request: Request, response: Response, next: NextFunction): Promise<Response> {
    const validator = new Validator(request.query, {
      'id': 'required|string',
    });
    const inputsIsValid = await validator.check();
    if (!inputsIsValid) {
      return response.status(HttpStatus.unprocessableEntity.code).json({ error: validator.errors });
    }

    const id = request.query.id as string ?? '';
    const game = await GameModel.getBySpecificId(id);
    if (!game) {
      return response.sendStatus(HttpStatus.noContent.code);
    }
    return response.status(HttpStatus.ok.code).json(game);
  }

  public static async getAll(request: Request, response: Response, next: NextFunction): Promise<Response> {
    const games = await GameModel.getAll();
    if (!games){
      return response.status(HttpStatus.ok.code).json([])
    }
    return response.status(HttpStatus.ok.code).json(games)
  }

  public static async createNewGame(request: Request, response: Response, next: NextFunction): Promise<Response> {
    const validator = new Validator(request.body, {
      'title': 'required|string',
      'releaseDate': 'required|dateiso',
      'price': 'required|object',
      'price.normal': 'required|numeric',
      'price.promo': 'numeric',
      'price.release': 'numeric',
    });
    const inputsIsValid = await validator.check();
    if (!inputsIsValid) {
      console.log('Validator errors', validator.errors, inputsIsValid);
      return response.status(HttpStatus.unprocessableEntity.code).json({ error: validator.errors });
    }

    const newGameParams: INewGame = request.body;
    const created = await GameModel.createGame(newGameParams);
    return response.status(HttpStatus.ok.code).json(created);
  }
}