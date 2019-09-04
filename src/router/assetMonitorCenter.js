const riskMonitorOverview  = () => import( '../views/assetMonitorCenter/riskMonitorOverview');
const assetManage  = () => import( '../views/assetMonitorCenter/assetManage');
const institutionalLabelManage  = () => import( '../views/assetMonitorCenter/institutionalLabelManage');



export default[
  {
    path:'/stap/assetMonitorCenter/riskMonitorOverview',
    name: 'riskMonitorOverview',
    component: riskMonitorOverview
  },
  {
    path:'/stap/assetMonitorCenter/assetManage',
    name: 'assetManage',
    component: assetManage
  },
  {
    path:'/stap/assetMonitorCenter/institutionalLabelManage',
    name: 'institutionalLabelManage',
    component: institutionalLabelManage
  }
]

