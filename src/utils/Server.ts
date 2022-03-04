import * as http from 'http';
import { HttpStatus } from '@api-rest/constants/HttpStatus';
import express, { Express, Router, ErrorRequestHandler, Request, Response } from 'express'
import cors from 'cors';
import { Routes } from '@api-rest/routes/Routes';
import { Log } from '@api-rest/utils/Log';

export class Server {
  public server: Express;
  protected host: string;
  protected port: number;

  public constructor(
    port: number = 7546,
    host: string = 'localhost',
    router?: Router,
  ) {
    this.host = host;
    this.port = port;
    if (!router) {
      Routes.getAllRoutes();
      router = Routes.router;
    }
    this.server = express();
    this.server.use(express.urlencoded({
      extended: true,
    }));
    this.server.use(express.json());
    const isInvalidJson: ErrorRequestHandler = (err, request, response, next) => {
      if (err instanceof SyntaxError && 'body' in err) {
        return response.status(HttpStatus.badRequest.code).json({
          message: HttpStatus.badRequest.status
        });
      }
      return next(err);
    };
    this.server.use(isInvalidJson);
    this.server.use(cors());
    this.server.use(Routes.routePath, router);
    this.server.get('*', (request: Request, response: Response) => {
      response.sendStatus(HttpStatus.notFound.code);
    })
  }

  public start(): http.Server {
    return this.server.listen(this.port, this.host, () => {
      Log.info(`Server is listening at ${this.host}:${this.port}`);
    });
  }
}
