import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/layout/Home.vue'
import CounterView from '../views/pages/Counter.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/counter',
            name: 'counter',
            component: CounterView,
        },
    ]
})

export default router