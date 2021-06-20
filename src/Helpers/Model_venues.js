import axios from 'axios';

export default class Packages {
    /**
     * Fetch a paginated user list.
     *
     * @param {object} params
     *
     * @return {object}
     */
    
    static async paginated(params = {}) {
        const response = await axios.get('/api/v1/users', {
            params,
        });

        if (response.status !== 200) {
            return {};
        }

        return response.data;
    }

    /**
     * Store a new user.
     *
     * @param {object} attributes
     *
     * @return {object}
     */
    static async store(attributes) {
 
        // if (response.status !== 201) {
        //     return {};
        // }

    }

    /**
     * Show a user.
     *
     * @param {number} id
     *
     * @return {object}
     */
    static async show(slug) {
        const response = await axios.get(`/api/v1/users/${slug}`);

        if (response.status !== 200) {
            return {};
        }

        return response.data;
    }

    /**
     * Update a user.
     *
     * @param {number} id
     * @param {object} attributes
     *
     * @return {object}
     */
    static async update(id, attributes) {
      
    }

    /**
     * Delete a user.
     *
     * @param {number} id
     *
     * @return {object}
     */
    static async delete(id) {
       
    }

    /**
     * Restore a user.
     *
     * @param {number} id
     *
     * @return {object}
     */
    static async restore(id) {
       
    }
}