import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import Order from "@/views/Order.vue"
import MakePizza from "@/views/MakePizza.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/order', component: Order },
    { path: '/make-pizza', component: MakePizza }
  ]
})

export default router
