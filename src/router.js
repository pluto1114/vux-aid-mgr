import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Index from '@/views/Index'
import Index2 from '@/views/Index2'
import Index3 from '@/views/Index3'

import PoolPersons from '@/views/PoolPersons'

import Article from '@/views/Article'
import ArticleMgr from '@/views/ArticleMgr'
import ArticleSend from '@/views/ArticleSend'

import Project from '@/views/Project'
import ProjectMgr from '@/views/ProjectMgr'
import ProjectSend from '@/views/ProjectSend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'index',
          name: 'Index',
          component: Index
        },
        {
          path: 'index2',
          name: 'Index2',
          component: Index2
        },
        {
          path: 'index3',
          name: 'Index3',
          component: Index3
        },
      ]
    },
    {
      path: '/pool-persons',
      name: 'PoolPersons',
      component: PoolPersons
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/project-mgr',
      name: 'ProjectMgr',
      component: ProjectMgr
    },
    {
      path: '/project-send',
      name: 'ProjectSend',
      component: ProjectSend
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/article-mgr',
      name: 'ArticleMgr',
      component: ArticleMgr
    },
    {
      path: '/article-send',
      name: 'ArticleSend',
      component: ArticleSend
    },
  ]
})
