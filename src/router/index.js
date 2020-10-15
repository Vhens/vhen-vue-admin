/*
 * @Author: Vhen
 * @Date: 2020-10-10 13:54:28
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-15 11:02:40
 * @Description: 路由
 */

import Layout from 'layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    // hidden: true,
    // meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'home',
        name: '首页',
        meta: { title: '首页', icon: 'user' },
        component: (_) => import('views/home'),
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('views/form'),
        meta: { title: 'Form', icon: 'el-icon-picture-outline', }
      }
    ]
  },
  {
    path: '/nested',
    redirect: '/nested/menu1/menu1-1',
    component: Layout,
    meta: {
      title: '菜单管理',
      icon: 'el-icon-watermelon'
    },
    children: [
      {
        path: 'menu1',
        name: 'Menu1',
        redirect: '/nested/menu1/menu1-1',
        meta: { title: '菜单1' },
        component: () => import('views/menu/menu1'),
        children: [
          {
            path: 'menu1-1',
            component: () => import('views/menu/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: '菜单 1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('views/menu/menu1/menu1-2'),
            name: 'Menu1-1',
            meta: { title: '菜单 1-2' }
          },
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        meta: { title: '菜单2' },
        component: () => import('views/menu/menu2'),
      }
    ]
  },

  {
    path: 'github',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'github', icon: 'el-icon-link' }
      }
    ]
  },
]

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
