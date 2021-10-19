import { Router } from 'express';
import { AuthenticateUserCrontrollers } from './controllers/AuthenticateUserControllers';

const router = Router();

router.post("/authenticate", new AuthenticateUserCrontrollers().handle)

export {router}