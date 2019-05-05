import layout from '@/page/layout'
import menus from '@/page/menus'

//四个业务的路由
const businessRoutes = {
  path: '/',
  component: layout,
  children: [
    {
      path: '',
      component: {template: `<div class="blankClass">
          <p>欢迎使用商家端系统</p>
        </div>
      `}
    },
    {
      path: 'takeout',
      component: menus,
      beforeEnter(to, from, next) {
        console.log("change lastlogintype");
        next();
      },
      children:[
        {
          path: '',
          redirect: 'index'
        },
        {
          path: 'index',
          name: 'windex',
          component: () => import('@/page/takeout'),
        },{
          path: 'order',
          name: 'worder',
          component: () => import('@/page/takeout/order')
        },{
          path: 'product',
          name: 'wproduct',
          component: () => import('@/page/takeout/product')
        }
        
      ]
    },
    {
      path: 'groupBuy',
      component: menus,
      beforeEnter(to, from, next) {
        console.log("change lastlogintype");
        next();
      },
      children:[
        {
          path: '',
          redirect: 'index'
        },
        {
          path: 'index',
          name: 'tindex',
          component: () => import('@/page/groupBuy'),
        },{
          path: 'order',
          name: 'torder',
          component: () => import('@/page/groupBuy/order')
        },{
          path: 'product',
          name: 'tproduct',
          component: () => import('@/page/groupBuy/product')
        }
      ]
    },
    {
      path: 'collage',
      component: menus,
      beforeEnter(to, from, next) {
        console.log("change lastlogintype");
        next();
      },
      children:[
        {
          path: '',
          redirect: 'index'
        },
        {
          path: 'index',
          name: 'cindex',
          component: () => import('@/page/collage'),
        },{
          path: 'order',
          name: 'corder',
          component: () => import('@/page/collage/order')
        },{
          path: 'product',
          name: 'cproduct',
          component: () => import('@/page/collage/product')
        }
      ]
    },
    {
      path: 'bargain',
      component: menus,
      beforeEnter(to, from, next) {
        console.log("change lastlogintype");
        next();
      },
      children:[
        {
          path: '',
          redirect: 'index'
        },
        {
          path: 'index',
          name: 'kindex',
          component: () => import('@/page/bargain'),
        },{
          path: 'order',
          name: 'korder',
          component: () => import('@/page/bargain/order')
        },{
          path: 'product',
          name: 'kproduct',
          component: () => import('@/page/bargain/product')
        }
      ]
    }
  ]
}

export default {
  routes: [
    businessRoutes
    
  ]
}
