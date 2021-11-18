import { createRouter, createWebHashHistory } from 'vue-router'
import PivotTableDemo from '../views/VueFlexmonsterExamples/PivotTableDemo.vue'

const routes = [{
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
  path: '/handling-events',
  name: 'HandlingEvents',
  component: () => import('../views/VueFlexmonsterExamples/HandlingEvents')
},
{
  path: '/using-api-calls',
  name: 'UsingAPICalls',
  component: () => import('../views/VueFlexmonsterExamples/UsingAPICalls')
},
{
  path: '/updating-data',
  name: 'UpdatingData',
  component: () => import('../views/VueFlexmonsterExamples/UpdatingData')
},
{
  path: '/customizing-toolbar',
  name: 'CustomizingToolbar',
  component: () => import('../views/VueFlexmonsterExamples/CustomizingToolbar')
},
{
  path: '/customizing-grid',
  name: 'CustomizingGrid',
  component: () => import('../views/VueFlexmonsterExamples/CustomizingGrid')
},
{
  path: '/with-highcharts',
  name: 'WithHighcharts',
  component: () => import('../views/VueFlexmonsterExamples/WithHighcharts')
},
{
  path: '/with-amcharts',
  name: 'WithAmcharts',
  component: () => import('../views/VueFlexmonsterExamples/WithAmcharts')
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
