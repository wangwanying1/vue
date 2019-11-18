import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shouye from '@/components/shouye'
import two from '@/components/two'


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: shouye
    },
    {
      path: '/HelloWorld/:id',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/two',
      name: 'two',
      component: two
    }
  ]
})
