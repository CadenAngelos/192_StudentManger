import { useRouter } from 'next/router';
import Layout from '../layouts/Layout'

export default Register;

function Register() {
    const router = useRouter();
    return (
        <Layout>    
            <div className="register_container">
                <div className="w-full max w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    </form>
                </div>     
            </div>
        </Layout>
    )
}