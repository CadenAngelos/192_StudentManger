import { useRouter } from 'next/router';
import Layout from '../layouts/Layout'
import registercss from '../styles/register.module.css'
export default Register;

function Register() {
    const router = useRouter();
    return (
        <Layout>    
            <div className={registercss.register_container}>
                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Register">
                                Register
                            </label>
                            <div className="block text-gray-700 text-sm font-bold mb-2"> 
                                <div className="auth-form__group"> 
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="text" placeholder="Email"/>
                                </div>
                            </div>

                            <div className="block text-gray-700 text-sm font-bold mb-2"> 
                                <div className="auth-form__group">
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Username" type="text" placeholder="Username"/>
                                </div>
                            </div>

                            <div className="block text-gray-700 text-sm font-bold mb-2"> 
                                <div className="auth-form__group">
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Password" type="Password" placeholder="Password (6 digits ai least)"/>
                                </div>
                            </div>

                            <div className="block text-gray-700 text-sm font-bold mb-2"> 
                                <div className="auth-form__group">
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Confirm_Password" type="Password" placeholder="Confirm password"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Register
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Existing Account
                            </a>
                        </div>
                    </form>
                </div>     
            </div>
        </Layout>
    )
}