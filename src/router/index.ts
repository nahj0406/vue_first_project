import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/layout/Home.vue'
import CounterView from '../views/pages/Counter.vue'
import TextLeaderView from '../views/pages/TextLeader.vue'

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
        {
            path: '/TextLeader',
            name: 'TextLeader',
            component: TextLeaderView, 
        }
    ]
})

export default router