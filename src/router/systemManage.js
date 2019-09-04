const userManage  = () => import( '../views/systemManage/userManage');
const ruleManage  = () => import( '../views/systemManage/ruleManage');
const alarmManage  = () => import( '../views/systemManage/alarmManage');
const sensorManage  = () => import( '../views/systemManage/sensorManage');
const systemLog  = () => import( '../views/systemManage/systemLog');
const trustList  = () => import( '../views/systemManage/trustList');
const systemConfig  = () => import( '../views/systemManage/systemConfig');
const systemUpdate  = () => import( '../views/systemManage/systemUpdate');
const platformManagement  = () => import( '../views/systemManage/systemConfig/platformManagement');
const platformCascade  = () => import( '../views/systemManage/systemConfig/platformCascade');
const routManagement  = () => import( '../views/systemManage/systemConfig/routManagement');
const interfaceManagement  = () => import( '../views/systemManage/systemConfig/interfaceManagement');
const logSetting  = () => import( '../views/systemManage/systemConfig/logSetting');       
const platformUpgrade  = () => import( '../views/systemManage/systemUpdate/platformUpgrade');       
const probeVersion  = () => import( '../views/systemManage/systemUpdate/probeVersion'); 
const libraryUpgrade  = () => import( '../views/systemManage/systemUpdate/libraryUpgrade'); 

export default[

  {
      path: '/stap/systemManage/userManage',
      name: 'userManage',
      component: userManage
    },
  {
      path: '/stap/systemManage/ruleManage',
      name: 'ruleManage',
      component: ruleManage
    },
  {
      path: '/stap/systemManage/alarmManage',
      name: 'alarmManage',
      component: alarmManage
    },
  {
      path: '/stap/systemManage/sensorManage',
      name: 'sensorManage',
      component: sensorManage
    },
  {
      path: '/stap/systemManage/systemLog',
      name: 'systemLog',
      component: systemLog
    },
  {
      path: '/stap/systemManage/trustList',
      name: 'trustList',
      component: trustList
    },
  {
      path: '/stap/systemManage/systemConfig',
      name: 'systemConfig',
      component: systemConfig
    },
  {
      path: '/stap/systemManage/systemUpdate',
      name: 'systemUpdate',
      component: systemUpdate
    },
    {
        path: '/stap/systemManage/systemConfig/platformManagement',
        name: 'platformManagement',
        component: platformManagement
      },
    {
        path: '/stap/systemManage/systemConfig/platformCascade',
        name: 'platformCascade',
        component: platformCascade
      },
  {
      path: '/stap/systemManage/systemConfig/routManagement',
      name: 'routMana',
      component: routManagement
    },
  {
      path: '/stap/systemManage/systemConfig/interfaceManagement',
      name: 'interfaceManagement',
      component: interfaceManagement
    },
  {
      path: '/stap/systemManage/systemConfig/logSetting',
      name: 'logSetting',
      component: logSetting
    },
    {
      path: '/stap/systemManage/systemUpdate/platformUpgrade',
      name: 'platformUpgrade',
      component: platformUpgrade
    },
  {
      path: '/stap/systemManage/systemUpdate/probeVersion',
      name: 'probeVersion',
      component: probeVersion
    },
  {
      path: '/stap/systemManage/systemUpdate/libraryUpgrade',
      name: 'libraryUpgrade',
      component: libraryUpgrade
    }
  
]







