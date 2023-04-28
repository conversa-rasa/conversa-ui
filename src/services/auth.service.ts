import HttpClient from "./httpclient.service";
import config from "@/config";

class AuthService extends HttpClient {

    auth = false;

    constructor() {
        super(config.SERVER_URL);
    }

    login(password: string) {
        const data = { password: password }
        return super.get('/login', data);
    }

    authenticate(status: boolean){
        this.auth = status;
    }
}

export const authService = new AuthService();