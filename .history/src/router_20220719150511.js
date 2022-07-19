import Home from './pages/home.vue'
import Login from './pages/login.vue'
import Index from './pages/index.vue'
import Product from './pages/product.vue'
import Detail from './pages/detail.vue'
import Cart from './pages/cart.vue'
import Order from './pages/order.vue'
import OrderConfirm from './pages/orderConfirm.vue'
import OrderList from './pages/orderList.vue'
import OrderPay from './pages/orderPay.vue'
import AliPay from './pages/alipay.vue'

export default [
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index,
                },{
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                }, {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail,
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children:[
                {
                    path:'list',
                    name:'olist-list',
                    component:OrderList,
                }, {
                    path: 'confirm',
                    name: 'olist-confirm',
                    component: OrderConfirm,
                }, {
                    path: 'pay',
                    name: 'olist-pay',
                    component: OrderPay,
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    component: AliPay,
                }
            ]
        }
    ];