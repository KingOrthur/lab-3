import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogView from "@/views/CatalogView.vue";
import LoginView from "@/views/LoginView.vue";
import CardInfoView from "@/views/CardInfoView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogView
  },
  {
    path: '/cardinfo',
    name: 'cardinfo',
    component: CardInfoView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
