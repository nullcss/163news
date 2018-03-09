import Vue from 'vue'
import Router from 'vue-router'
import index from 'views/index/index'
import home from 'views/Home/index'
import user from 'views/User/index'
import video from 'views/Video/index'
import msg from 'views/Msg/index'
import mall from 'views/Mall/index'
import feedback from 'views/Feedback/index'
import record from 'views/Record/index'
import system from 'views/System/index'
import headline from 'views/Headline/index'
import article from 'views/Article/index'
import search from 'views/Search/index'


Vue.use(Router)

export const router = new Router({
  routes: [
    { 
        path: '/', 
        name: '首页', 
        meta: { page: true},
        component: index,
        redirect: '/home',
        children: [
            { path: 'home', component: home, name: '首页' }
        ]
    },
    { 
      path: '/video',  
      meta: { page: true},
      component: index,
      redirect: '/',
      children: [
          { path: '/', component: video, name: '视频' }
      ]
    },
    { 
        path: '/headline',  
        meta: { page: true},
        component: index,
        redirect: '/',
        children: [
            { path: '/', component: headline, name: '微头条' }
        ]
    },
    { 
        path: '/user', 
        meta: { page: true}, 
        component: user,
        name: '个人中心'
    },
    { 
        path: '/search', 
        name: '搜索', 
        component: search
    },
    { 
        path: '/article/:id', 
        name: '文章', 
        meta: { slide: 1 },
        component: article
    },
    { 
        path: '/msg', 
        name: '消息通知', 
        meta: { 
            slide: 1 ,
            login: true
        },
        component: msg
    },
    { 
        path: '/mall', 
        name: '头条商城', 
        meta: { 
            slide: 1 ,
            login: true
        },
        component: mall
    },
    { 
        path: '/feedback', 
        name: '用户反馈', 
        meta: { 
            slide: 1 ,
            login: true
        },
        component: feedback
    },
    { 
        path: '/record', 
        name: '我的记录', 
        meta: { 
            slide: 1 ,
            login: true
        },
        component: record
    },
    { 
        path: '/system', 
        name: '系统设置', 
        meta: { 
            slide: 1 ,
            login: true
        },
        component: system
    },
  ]
})
