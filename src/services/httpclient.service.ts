
export default class HttpClient {
    private serverURL: string;
    private networkTimeOut: number = 7000; // 7s to abort

    constructor(serverURL: string) {
        this.serverURL = serverURL;
    }

    async get(path: string, params?: any) {

        // Build URL
        const url: URL = new URL(this.serverURL);
        url.pathname = path;

        const searchParams = new URLSearchParams(params);

        try {
            // Create abort controller to handle timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.networkTimeOut);

            // Fetch with timeout
            const response = await fetch(url.toString() + '?' + searchParams.toString(), { signal: controller.signal });
            clearTimeout(timeoutId);

            if (response.status >= 200 && response.status <= 299) {
                const jsonResponse = await response.json();
                return jsonResponse;
            } else {
                // Handle errors
                console.error(response.status, response.statusText);
                return { error: response.statusText }
            }
        } catch (error) {
            // Timeout error
            return { error: "Request timeout" }
        }
    }

    async post(path: string, content:string) {

        // Build URL
        const url: URL = new URL(this.serverURL);
        url.pathname = path;
        
        console.log("Mi url:------: " +url)
        const response = await fetch(url, {
            method: 'POST',
            body: content,
            headers: {'Content-Type': 'application/json'} });

            if (!response.ok) { /* Handle */ }

            // If you care about a response:
            if (response.body !== null) {
                const result = (await response.json());
                return result; 
            }

    }
}