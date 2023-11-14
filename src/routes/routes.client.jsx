import { ClientLayout } from '../layouts'
import { Home } from '../pages'

const routesClient = [
    {
        path: '/home',
        layout: ClientLayout,
        component: Home,
        isSuperuserRoute: false
    },
]

export default routesClient;