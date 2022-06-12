import axios from 'axios';

const urlClients = 'http://localhost:9999/clients'

class Service {

    static async get(){
        let clients = await axios.get(urlClients)

        return clients
    }
    
    static validateResponse(/* response */) {
        const isValidResponse = true 
        
        return isValidResponse;
    }
}

export default Service
