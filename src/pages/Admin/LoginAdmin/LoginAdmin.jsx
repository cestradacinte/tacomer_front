import { LoginForm } from '../../../components/Admin'
import './LoginAdmin.scss'
export const LoginAdmin = () => {
    return (
        <>
        <div className='login-admin'>
            <div className='login-admin__content'>
                <h2>Administracion Nevados y Tacos</h2>
                <LoginForm />
            </div>
        </div>
        </>
    )
}