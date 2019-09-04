const dashboard = () =>
    import ('../views/dashboard/dashboard');

export default [{
    path: '/stap/dashboard',
    name: 'dashboard',
    component: dashboard
}]