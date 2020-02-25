import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/InfiniteScroll.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
