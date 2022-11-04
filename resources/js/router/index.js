import routes from './routes'
import {createWebHistory, createRouter} from "vue-router";




const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Madi' ;
    next();
});
export default router;


