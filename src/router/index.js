import Vue from 'vue'
import VueRouter from 'vue-router'
import PivotTableDemo from '../components/VueFlexmonsterExamples/PivotTableDemo'

Vue.use(VueRouter)

const routes = [{
    path: '/pivot-table-demo',
    name: 'PivotTableDemo',
    component: PivotTableDemo
  },
  {
    path: '/calling-events',
    name: 'CallingEvents',
    component: () => import('../components/VueFlexmonsterExamples/CallingEvents')
  },
  {
    path: '/using-api-calls',
    name: 'UsingAPICalls',
    component: () => import('../components/VueFlexmonsterExamples/UsingAPICalls')
  },
  {
    path: '/updating-data',
    name: 'UpdatingData',
    component: () => import('../components/VueFlexmonsterExamples/UpdatingData')
  },
  {
    path: '/customizing-toolbar',
    name: 'CustomizingToolbar',
    component: () => import('../components/VueFlexmonsterExamples/CustomizingToolbar')
  },
  {
    path: '/customizing-grid',
    name: 'CustomizingGrid',
    component: () => import('../components/VueFlexmonsterExamples/CustomizingGrid')
  },
  {
    path: '/with-highcharts',
    name: 'WithHighcharts',
    component: () => import('../components/VueFlexmonsterExamples/WithHighcharts')
  },
  {
    path: '/with-amcharts',
    name: 'WithAmcharts',
    component: () => import('../components/VueFlexmonsterExamples/WithAmcharts')
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