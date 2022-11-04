import axios from "axios";

const baseUrl = '/api/'
export default {
    get(url, params = {}, headers = {}) {
        return axios.get(`${baseUrl + url}`, {params: params, headers: headers})
    },
    getById(url, id) {
        return axios.get(`${baseUrl + url}/${id}`)
    },
    post(url, data = {}, config = {}) {
        return axios.post(`${baseUrl + url}`, data, config)
    },
    postById(url, id, data, config = {}) {
        return axios.post(`${baseUrl + url}/${id}`, data, config)
    },
    patch(url, id, data = {}, config = {}) {
        return axios.patch(`${baseUrl + url}/${id}`, data, config)
    },
    deleteById(url, id) {
        return axios.delete(`${baseUrl + url}/${id}`)
    },
    delete(url) {
        return axios.delete(`${baseUrl + url}`)
    }
}
