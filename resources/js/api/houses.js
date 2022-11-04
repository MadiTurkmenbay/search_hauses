import http from './http'
export default () => ({
    get(params = {}) {
        return http.get('houses', params);
    },
    // getAll(params = {}) {
    //     return http.get('housesAll', params);
    // },
    // getById(id) {
    //     return http.getById('houses', id)
    // },
    // create(data) {
    //     return http.post('houses', data)
    // },
    // update(id,data) {
    //     return http.postById('houses', id, data)
    // },
    // delete(id) {
    //     return http.deleteById('houses', id)
    // }
});
