
import Welcome from '../pages/welcome.vue'
import Search from '../pages/search.vue'
import E404 from '../pages/errors/404.vue'



export default [
    {path: '/', name: 'welcome', component: Welcome},
    {path: '/search', name: 'search', component: Search},

    {path: '/:pathMatch(.*)*', component: E404}
]
