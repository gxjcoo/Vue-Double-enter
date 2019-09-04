const securityLog  = () => import( '../views/logCenter/securityLog');
const linkageLog  = () => import( '../views/logCenter/linkageLog');
const eventAlarm  = () => import( '../views/logCenter/siemLog/eventAlarm');
const associationRules  = () => import( '../views/logCenter/siemLog/associationRules');
const logAlarm  = () => import( '../views/logCenter/siemLog/logAlarm');
const thirdPartyLog  = () => import( '../views/logCenter/siemLog/thirdPartyLog');
const collectorManage  = () => import( '../views/logCenter/siemLog/collectorManage');



export default[{
    path: '/stap/logCenter/securityLog',
    name: 'securityLog',
    component: securityLog
  },{
    path: '/stap/logCenter/linkageLog',
    name: 'linkageLog',
    component: linkageLog
  },

  {
    path:"/stap/logCenter/siemLog/eventAlarm",
    name: 'eventAlarm',
    component: eventAlarm
  },
{
    path:"/stap/logCenter/siemLog/associationRules",
    name: 'associationRules',
    component: associationRules
  },
{
    path:"/stap/logCenter/siemLog/logAlarm",
    name: 'logAlarm',
    component: logAlarm
  },
{
    path:"/stap/logCenter/siemLog/thirdPartyLog",
    name: 'thirdPartyLog',
    component: thirdPartyLog
  },
{
    path:"/stap/logCenter/siemLog/collectorManage",
    name: 'collectorManage',
    component: collectorManage
  }
]







