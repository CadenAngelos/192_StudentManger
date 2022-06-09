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
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                                Email
                            </label>
                            <div className="block text-gray-700 text-sm font-bold mb-2"> 
                                <div className="auth-form__group"> 
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="text" placeholder="Email"/>
                                </div>
                            </div>
                
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
                            Register
                            </button>
                            <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
                            Register
                            </button>
                        
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
