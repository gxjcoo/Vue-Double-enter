const threatIntelligence= () => import('../views/threatIntelligenceCenter/threatIntelligence');
const hackerArchives= () => import('../views/threatIntelligenceCenter/hackerArchives');





export default[{
    path: '/stap/threatIntelligenceCenter/threatIntelligence',
    name: 'threatIntelligence',
    component: threatIntelligence
  },{
    path: '/stap/threatIntelligenceCenter/hackerArchives',
    name: 'hackerArchives',
    component: hackerArchives
  }
]