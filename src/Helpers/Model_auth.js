import axios from 'axios';

export default class Auth {
     /**
     * Fetch a paginated user list.
     *
     * @param {object} params
     *
     * @return {object}
     */
    
    static async signin(params = {}) {
        const response = await axios.post(process.env.API_URL + 'api/v1/login', 
            params,
        );

        if (response.status !== 200) {
            return {};
        }

        return response.data;
    }


}
