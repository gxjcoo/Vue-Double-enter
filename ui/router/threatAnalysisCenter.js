const insideThreatAnalysis  = () => import( '../views/threatAnalysisCenter/insideThreatAnalysis');
const contingentThreatAnalysis  = () => import( '../views/threatAnalysisCenter/contingentThreatAnalysis');
const externalThreatAnalysis  = () => import( '../views/threatAnalysisCenter/externalThreatAnalysis');


export default[{
    path: 'threatAnalysisCenter/insideThreatAnalysis',
    name: 'insideThreatAnalysis',
    component: insideThreatAnalysis
  },{
    path: 'threatAnalysisCenter/contingentThreatAnalysis',
    name: 'contingentThreatAnalysis',
    component: contingentThreatAnalysis
  },{
    path: 'threatAnalysisCenter/externalThreatAnalysis',
    name: 'externalThreatAnalysis',
    component: externalThreatAnalysis
  }
]