const insideFlowAnalysis = () => import('../views/flowAnalysisCenter/insideFlowAnalysis');
const contingentFlowAnalysis = () => import('../views/flowAnalysisCenter/contingentFlowAnalysis');
const externalFlowAnalysis = () => import('../views/flowAnalysisCenter/externalFlowAnalysis');
const voilatoryVisits =()=> import('../views/flowAnalysisCenter/voilatoryVisitsAnalysis/voilatoryVisits')
const voilatoryVisitsModel =()=> import('../views/flowAnalysisCenter/voilatoryVisitsAnalysis/voilatoryVisitsModel')



export default[{
    path: '/stap/flowAnalysisCenter/insideFlowAnalysis',
    name: 'insideFlowAnalysis',
    component: insideFlowAnalysis
  },{
    path: '/stap/flowAnalysisCenter/contingentFlowAnalysis',
    name: 'contingentFlowAnalysis',
    component: contingentFlowAnalysis
  },{
    path: '/stap/flowAnalysisCenter/externalFlowAnalysis',
    name: 'externalFlowAnalysis',
    component: externalFlowAnalysis
  },{
    path: '/stap/flowAnalysisCenter/voilatoryVisitsAnalysis/voilatoryVisits',
    name: 'voilatoryVisits',
    component: voilatoryVisits
  },{
    path: '/stap/flowAnalysisCenter/voilatoryVisitsAnalysis/voilatoryVisitsModel',
    name: 'voilatoryVisitsModel',
    component: voilatoryVisitsModel
  }
]

