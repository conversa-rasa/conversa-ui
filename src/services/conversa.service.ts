import HttpClient from "./httpclient.service";
import config from "@/config";

class ConversaService extends HttpClient {
    constructor() {
        super(config.SERVER_URL);
    }

    getConversations() {
        return super.get('/conversations');
    }

    getConversation(id: string) {
        const data = { conversation_id: id }
        return super.get('/conversation', data);
    }

    checkInstallation(path: string) {
        const data = { path: path }
        return super.get('/checkpath', data);
    }

    install(password: string, port?: number) {
        const data = { password: password }
        return super.get('/install', data);
    }

    firstRun() {
        return super.get('/firstrun');
    }
}

export const conversaService = new ConversaService();