import Vue from 'vue'
import Router from 'vue-router'
import Send from '../components/send'
import Cointype from '../components/cointype'
import Login from '../components/login'
import Writecode from '../components/writecode'
import setpass from '../components/setpass'
import dasd from '../components/Dasd'
import Home from '../components/Home'
import BaoDetails from '../components/BaoDetails'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/hongbao/send',
      name: 'send',
      component: Send
    },
    {
      path:'/hongbao/cointype',
      name:'cointype',
      component:Cointype
    },
    {
      path:'/hongbao/login',
      name:'login',
      component:Login
    },
    {
      path:'/hongbao/writecode',
      name:'writecode',
      component:Writecode
    },
    {
      path:'/hongbao/setpass',
      name:'setpass',
      component:setpass
    },
    {
      path:'/hongbao/dasd',
      name:'dasd',
      component:dasd
    },
    {
      path: '/',
      redirect: 'hongbao/home/3',
    },
    {
      /**
       * 点击好友发的红包的页面
       * status
       * 1:红包可以抢
       * 2:自己抢到了
       * 3:自己没抢到
       * 4:红包过期
       * 5:其他
       */
      path: '/hongbao/home/:status',
      name: 'Home',
      component: Home,
    },
    {
      /**
       * status
       * 2:自己抢到了
       * 3:自己没抢到
       * 4:红包过期
       * 5:其他
       */
      path: '/hongbao/baoDetails/:status',
      name: 'BaoDetails',
      component: BaoDetails
    }
  ]
})
