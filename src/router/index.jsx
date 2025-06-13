import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/pages/layout'
import Login from '@/pages/login'
import AuthRoute from '@/components/authRoute'
const router = createBrowserRouter([
    {
        path: '/',
        element:<AuthRoute> <Layout/> </AuthRoute>
    },
    {
        path: '/login',
        element: <Login/>
    }
])
export default router