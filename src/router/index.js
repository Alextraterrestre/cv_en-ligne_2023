// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Skills from '@/views/Skills.vue'
import Hobbies from '@/views/Hobbies.vue'
import Portfolio from '@/views/Portfolio.vue'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    },
    {
        path: '/hobbies',
        name: 'Hobbies',
        component: Hobbies
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(), routes,
    // history: createWebHashHistory(), routes
})
export default router
