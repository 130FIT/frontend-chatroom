import { createRouter, createWebHistory } from 'vue-router';
import Home from './view/Home.vue';
import Chatroom from './view/Chatroom.vue';
const routes = [
    {
        path: '/',
        name: '_Home',
        component: Home
    },
    {
        path: '/chatroom',
        name: 'Chatroom',
        component: Chatroom,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;