import { useRouter } from 'next/router';
import Layout from '../layouts/Layout'

export default ForgotPassword;

function ForgotPassword() {
    const router = useRouter();
    return (
        <Layout>
            <div className="forgotpassword_container">
            <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Register">
                                Register
                            </label>
            </div>
        </Layout>
    )
}
