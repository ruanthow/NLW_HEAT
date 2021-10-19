import axios from "axios";
/***
 * Receber o codigo tipo string
 * Recuperar o acess_token no github
 * Recuperar infos do user do github
 * Verificar se o user existe
 * -----SIM = Gera um token
 * -----NAO = cria no DB e gera um token
 * Retornar o token com as infos do user
 */
interface IAccessTokenResponse{
    access_token:string
}

interface IUserResponse{
    avatar_url: string,
    login:string,
    id:number,
    name:string
}

class AuthenticateUserServer{
    async execute(code: string){
        const url = "https://github.com/login/oauth/access_token";

        const {data: accessTokenResponse} = await axios.post<IAccessTokenResponse>(url, null, {
            params:{
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret:process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers:{
                "Accept": "application/json"
            }
        })

        const response = await axios.get<IUserResponse>("https://api.github.com/user", {
            headers:{
                authorization:`Bearer ${accessTokenResponse.access_token}`
            }
        })

        return response.data;
    }
}

export { AuthenticateUserServer }