import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path:'/',
      component: App ,
      children:[
        {
          path:'',
          component:r=>require.ensure([],()=>r(require("../page/home")),"home")
        },{
          path:'/answer',
          component:r=>require.ensure([],()=>r(require("../page/answer")),"answer")
        },{
          path:'/score',
          component:r=>require.ensure([],()=>r(require("../page/score")),"score")
        }

      ]
    }
  ]
})
export default router
