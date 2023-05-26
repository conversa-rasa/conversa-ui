import HttpClient from "./httpclient.service";
import config from "@/config";

class InteractiveService extends HttpClient {
    constructor() {
        super(config.RASA_SERVER_URL);
    }

    postMessage(user_id:string,message:string){
        var miMensaje = '{"sender": "'+user_id+'","message":"'+ message +'"}';
        return super.post('/webhooks/rest/webhook', miMensaje);
    }
}

export const interactiveService = new InteractiveService();