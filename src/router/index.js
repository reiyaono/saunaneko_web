import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Result from '@/components/Result'

Vue.use(Router)

const routes = [
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router