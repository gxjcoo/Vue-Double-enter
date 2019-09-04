const highAttackEvent = () => import('../views/securityEventCenter/highAttackEvent')
const rigidCreepEvent  = () => import( '../views/securityEventCenter/rigidCreepEvent');
const pageTamperingEvent  = () => import( '../views/securityEventCenter/pageTamperingEvent');
const bruteForceEvent  = () => import( '../views/securityEventCenter/bruteForceEvent');
const denialServiceEvent  = () => import( '../views/securityEventCenter/denialServiceEvent');
const exceptionAccess  = () => import( '../views/securityEventCenter/exceptionAccess');
const highVul  = () => import( '../views/securityEventCenter/highVul');

export default[
    {
        path: 'securityEventCenter/highAttackEvent',
        name: 'highAttackEvent',
        component: highAttackEvent
      }, 
      {
        path: 'securityEventCenter/rigidCreepEvent',
        name: 'rigidCreepEvent',
        component: rigidCreepEvent
      }, 
      {
        path: 'securityEventCenter/pageTamperingEvent',
        name: 'pageTamperingEvent',
        component: pageTamperingEvent
      }, 
      {
        path: 'securityEventCenter/bruteForceEvent',
        name: 'bruteForceEvent',
        component: bruteForceEvent
      }, 
      {
        path: 'securityEventCenter/denialServiceEvent',
        name: 'denialServiceEvent',
        component: denialServiceEvent
      }, {
        path: 'securityEventCenter/exceptionAccess',
        name: 'exceptionAccess',
        component: exceptionAccess
      }, {
        path: 'securityEventCenter/highVul',
        name: 'highVul',
        component: highVul
      }
]