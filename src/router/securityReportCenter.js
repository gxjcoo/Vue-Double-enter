const reportTemplateManage  = () => import( '../views/securityReportCenter/reportTemplateManage');
const reportSubscriptionManage  = () => import( '../views/securityReportCenter/reportSubscriptionManage');
const reportHistory  = () => import( '../views/securityReportCenter/reportHistory');
const addTemplate = () => import( '../views/securityReportCenter/addTemplate');



export default[{
  path: '/stap/securityReportCenter/reportTemplateManage',
  name: 'reportTemplateManage',
  component: reportTemplateManage
},
{
  path: '/stap/securityReportCenter/reportSubscriptionManage',
  name: 'reportSubscriptionManage',
  component: reportSubscriptionManage
},
{
  path: '/stap/securityReportCenter/reportHistory' ,
  name: 'reportHistory',
  component: reportHistory
},
{
  path: '/stap/securityReportCenter/addTemplate' ,
  name: 'addTemplate',
  component: addTemplate
}

]
