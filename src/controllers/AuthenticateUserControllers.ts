import { Request, Response} from "express";
import { AuthenticateUserServer } from "../services/AuthenticateUserServer";

class AuthenticateUserCrontrollers{
    async handle(resquest: Request, response: Response){
        const {code} = resquest.body;

        const service = new AuthenticateUserServer();
        const result = await service.execute(code)

        return response.json(result);
    }
}

export {AuthenticateUserCrontrollers}