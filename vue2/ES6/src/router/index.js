import Vue from 'vue'
import VueRouter from 'vue-router'
import PivotTableDemo from '@/views/VueFlexmonsterExamples/PivotTableDemo'

Vue.use(VueRouter)

const routes = [{
    path: '/pivot-table-demo',
    name: 'PivotTableDemo',
    component: PivotTableDemo
  },
  {
    path: '/calling-events',
    name: 'CallingEvents',
    component: () => import('@/views/VueFlexmonsterExamples/CallingEvents')
  },
  {
    path: '/using-api-calls',
    name: 'UsingAPICalls',
    component: () => import('@/views/VueFlexmonsterExamples/UsingAPICalls')
  },
  {
    path: '/updating-data',
    name: 'UpdatingData',
    component: () => import('@/views/VueFlexmonsterExamples/UpdatingData')
  },
  {
    path: '/customizing-toolbar',
    name: 'CustomizingToolbar',
    component: () => import('@/views/VueFlexmonsterExamples/CustomizingToolbar')
  },
  {
    path: '/customizing-grid',
    name: 'CustomizingGrid',
    component: () => import('@/views/VueFlexmonsterExamples/CustomizingGrid')
  },
  {
    path: '/with-highcharts',
    name: 'WithHighcharts',
    component: () => import('@/views/VueFlexmonsterExamples/WithHighcharts')
  },
  {
    path: '/with-amcharts',
    name: 'WithAmcharts',
    component: () => import('@/views/VueFlexmonsterExamples/WithAmcharts')
  },
  {
    path: '*',
    name: 'Home',
    redirect: '/pivot-table-demo'
  }
]

const router = new VueRouter({
  routes
})

export default router