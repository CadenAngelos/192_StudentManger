import { useRouter } from 'next/router';
import Layout from '../layouts/Layout'

export default Register;

function Register() {
    const router = useRouter();
    return (
        <Layout>    
            <div className="register_container">
                <div className="w-full max w-xs">

                </div>     
            </div>
        </Layout>
    )
}