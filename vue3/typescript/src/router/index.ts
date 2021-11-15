import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PivotTableDemo from '@/views/VueFlexmonsterExamples/PivotTableDemo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/pivot-table-demo',
    name: 'PivotTableDemo',
    component: PivotTableDemo
  },
  {
    path: '/composition-api-demo',
    name: 'CompositionAPIDemo',
    component: () => import('@/views/VueFlexmonsterExamples/CompositionAPIDemo.vue')
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
    path: '/:pathMatch(.*)*',
    name: 'PivotTableDemo',
    component: PivotTableDemo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
