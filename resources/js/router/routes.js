
import Welcome from '../pages/welcome.vue'
import Search from '../pages/search.vue'
import E404 from '../pages/errors/404.vue'



export default [
    {path: '/', name: 'welcome', meta: {title: 'Welcome Page'}, component: Welcome},
    {path: '/search', name: 'search', meta: {title: 'Houses list'}, component: Search},

    {path: '/:pathMatch(.*)*',  meta: {title: 'Not Found'}, component: E404}
]
