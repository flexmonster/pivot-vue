import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PivotTableDemo from '@/views/VueFlexmonsterExamples/PivotTableDemo.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/pivot-table-demo',
    name: 'PivotTableDemo',
    component: PivotTableDemo
  },
  {
    path: '/calling-events',
    name: 'CallingEvents',
    component: () => import('@/views/VueFlexmonsterExamples/CallingEvents.vue')
  },
  {
    path: '/using-api-calls',
    name: 'UsingAPICalls',
    component: () => import('@/views/VueFlexmonsterExamples/UsingAPICalls.vue')
  },
  {
    path: '/updating-data',
    name: 'UpdatingData',
    component: () => import('@/views/VueFlexmonsterExamples/UpdatingData.vue')
  },
  {
    path: '/customizing-toolbar',
    name: 'CustomizingToolbar',
    component: () => import('@/views/VueFlexmonsterExamples/CustomizingToolbar.vue')
  },
  {
    path: '/customizing-grid',
    name: 'CustomizingGrid',
    component: () => import('@/views/VueFlexmonsterExamples/CustomizingGrid.vue')
  },
  {
    path: '/with-highcharts',
    name: 'WithHighcharts',
    component: () => import('@/views/VueFlexmonsterExamples/WithHighcharts.vue')
  },
  {
    path: '/with-amcharts',
    name: 'WithAmcharts',
    component: () => import('@/views/VueFlexmonsterExamples/WithAmcharts.vue')
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
