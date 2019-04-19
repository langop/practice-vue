import layout from '@/page/layout'
import menus from '@/page/menus'
import TakeoutIndex from '@/page/takeout'
import TakeoutProduct from '@/page/takeout/product'

//四个业务的路由
const businessRoutes = {
  path: '/',
  component: layout,
  children: [
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
          rediret: 'index'
        },
        {
          path: 'index',
          name: 'index',
          component: TakeoutIndex,
        },{
          path: 'product',
          name: 'product',
          component: TakeoutProduct
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
