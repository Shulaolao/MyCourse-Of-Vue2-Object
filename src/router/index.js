import Vue from 'vue'
import Router from 'vue-router'
import TitleBar from '@/components/TitleBar';
import Ebook from '@/Ebook';
// import routes from './routes'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        redirect: '/ebook'
    },
    {
        path: '/ebook',
        name: 'ebook',
        component: Ebook
    },
    {
        path: '/titlebar',
        name: 'titlebar',
        component: TitleBar
    },   
]
})
