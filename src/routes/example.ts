import { Router } from 'express';
import { getHelloWorld } from '../controllers';

const router = Router();

router.get( '/hello-world', getHelloWorld );

export { router as exampleRouter };
