import { AdminLayout } from "../layouts"
import { LoginAdmin } from '../pages'
import { AdminDashboard } from '../pages'

const routesAdmin = [ 
    {
        path: '/',
        layout: AdminLayout,
        component: LoginAdmin,
        isSuperuserRoute: false
    },
    {
        path: '/admin',
        layout: AdminLayout,
        component: AdminDashboard,
        isSuperuserRoute: true
    }
]

export default routesAdmin;