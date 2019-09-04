import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main';
import Login from './components/Login'
import securityEventCenter from './router/securityEventCenter'
import threatAnalysisCenter from './router/threatAnalysisCenter'
import assetMonitorCenter from './router/assetMonitorCenter'
import flowAnalysisCenter from './router/flowAnalysisCenter'
import logCenter from './router/logCenter'
import securityReportCenter from './router/securityReportCenter'
import systemManage from './router/systemManage'
import threatIntelligenceCenter from './router/threatIntelligenceCenter'
import vulnerabilityAnalysisCenter from './router/vulnerabilityAnalysisCenter'
import dashboard from './router/dashboard'


//路由跳转权限判断
import store from './store'


Vue.use(Router)

const router = new Router({
    base: process.env.BASE_URL,
    routes: [{
            path: '/login',
            name: 'Login',
            component: Login
        }, {
            path: '/stap',
            name: 'Main',
            component: Main,
            children: [
                // 概览
                ...dashboard,
                //安全事件中心
                ...securityEventCenter,
                //威胁分析中心
                ...threatAnalysisCenter,

                ...assetMonitorCenter,
                ...flowAnalysisCenter,
                ...logCenter,
                ...securityReportCenter,
                ...systemManage,
                ...threatIntelligenceCenter,
                ...vulnerabilityAnalysisCenter
            ]
        },
        {
            path: '*',
            redirect: {
                name: 'Main'
            }
        }
    ]
})


//路由跳转权限判断
router.beforeEach((to, from, next) => {
    if (to.name != 'login') {
        store.dispatch('me/checkMe')
    }
    next()
})

export default router;