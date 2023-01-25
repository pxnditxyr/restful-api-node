import { Request, Response } from 'express';

export const getHelloWorld = ( _req: Request, res: Response ) => {
  try {
    return res.json({
      msg: 'Hello World - Pxndxs Dev'
    });
  } catch ( error ) {
    console.log( error );
    return res.status( 500 ).json({
      errors: {
        server: 'Internal Server Error',
      },
    });
  }
};
