import express, { Application } from 'express';
import cors from 'cors';
import { exampleRouter } from '../routes';

export class Server {
  private app : Application;
  private port : string;
  private apiPaths = {
    example: '/api/example'
  };

  constructor () {
    this.app = express();
    this.port = process.env.PORT || '8000';

    this.middlewares();
    this.routes();
  }

  middlewares () {
    this.app.use( cors() );
    this.app.use( express.json() );
    this.app.use( express.static( 'src/public' ) );
  }

  routes () {
    this.app.use( this.apiPaths.example, exampleRouter );
  }

  listen () {
    this.app.listen( this.port, () => {
      console.log( `Server running on port ${ this.port }` );
      console.log( `Click here to open: http://localhost:${ this.port }` );
    });
  }
}
