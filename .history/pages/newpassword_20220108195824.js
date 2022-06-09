import { useRouter } from 'next/router';
import Layout from '../layouts/Layout'
import styles from '../styles/Newpassword.module.css'

export default NewPassword;

function NewPassword() {
    const router = useRouter();
    return (
        <Layout>
            <div className={styles.newpassword_container}>
                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Change Password">
                                Change Password
                            </label>

                            <div className="block text-gray-700 text-sm font-bold mb-2">          
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="New_Password" type="Password" placeholder="New Password (6 digits ai least)"/>                               
                            </div>

                            <div className="block text-gray-700 text-sm font-bold mb-2"> 
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Confirm_Password" type="Password" placeholder="Confirm password"/>
                            </div>

                            <div className="block text-gray-700 text-sm font-bold mb-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Change
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}