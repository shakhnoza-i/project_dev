import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddBook from '../views/AddBook.vue'
import EditBook from '../views/EditBook.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/add',
    name: 'AddBook',
    component: AddBook
  },
  {
    path: '/books/:id',
    name: 'EditBook',
    component: EditBook,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
