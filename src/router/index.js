
import { createRouter, createWebHistory, } from 'vue-router/auto'
import HomePage from '../pages/Home.vue';
import AboutPage from '../pages/About.vue';
import StudentsPage from '../pages/students/index.vue';
import TeachersPage from '../pages/teacher/index.vue';
import TrainingPage from '../pages/training/index.vue';
const routes =  [
  {
    path: '/Home',
    component: HomePage
  },
  {
    path: '/About',
    component: AboutPage
  },
  {
    path: '/Students',
    component: StudentsPage
  },
  {
    path: '/teacher',
    component: TeachersPage
  },
  {
    path: '/Training',
    component: TrainingPage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
