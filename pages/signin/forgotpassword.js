import { useRouter } from 'next/router';
import Layout from '../../layouts/Layout'
import styles from '../../styles/Signin/Forgotpassword.module.css'

export default ForgotPassword;

function ForgotPassword() {
    const router = useRouter();
    return (
        <Layout>
            <div className={styles.forgotpassword_container}>
                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                                Email
                            </label>
                            
                            <div className="block text-gray-700 text-sm font-bold mb-2"> 
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="text" placeholder="Email"/>
                            </div>

                            <div className="block text-gray-700 text-sm font-bold mb-2">
                                <a href="newpassword">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Send
                                </button>
                                </a>
                            </div>
                           
                            <div className="block text-gray-700 text-sm font-bold mb-2">
                            <a href="login">
                                <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Cancel
                                </button>
                            </a>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}



