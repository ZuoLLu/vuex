import Vue from 'vue'
import Router from 'vue-router'
import store from '@/components/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'store',
      component: store
    },
    {
      path: '/tt', //电子处方
			name: 'tt',
			component: resolve => require(['@/components/tt'], resolve),
    }
  ]
})
