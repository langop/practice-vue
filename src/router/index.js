import layout from '@/page/layout'
import menus from '@/page/menus'
import TakeoutIndex from '@/page/takeout'
import TakeoutProduct from '@/page/takeout/product'

export default {
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: 'takeout',
          component: menus,
          children:[
            {
              path: '',
              name: 'takeoutInfo',
              component: {
                template: `<div><h1>外卖业务模块，请选择菜单查看具体功能</h1></div>`
              }
            },
            {
              path: 'index',
              name: 'index',
              component: TakeoutIndex
            },{
              path: 'product',
              name: 'product',
              component: TakeoutProduct
            }
          ]
        }
      ]
    }
    

  ]
}
