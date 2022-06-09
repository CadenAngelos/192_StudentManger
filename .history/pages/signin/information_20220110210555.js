import { useRouter } from 'next/router';
import Layout from '../../layouts/Layout'
import styles from '../../styles/Information.module.css'

export default Information;

function Information() {
    const router = useRouter();
    return (
        <Layout>
            <div className={styles.information_container}>
                <div className="w-full max w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Information">
                                Information
                            </label>

                            <div className="flex items-center justify-between">
                                <div className="w-1/3 block text-gray-700 text-sm font-bold mb-2">                                
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="UserID" type="text" placeholder="UserID"/>                             
                                </div>
                                <a className="inline-block align-baseline font-regular text-sm text-blue-500 hover:text-blue-800" href="#">
                                Change
                                </a>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="w-1/3 block text-gray-700 text-sm font-bold mb-2">                                
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="FullName" type="text" placeholder="FullName"/>                             
                                </div>
                                <a className="inline-block align-baseline font-regular text-sm text-blue-500 hover:text-blue-800" href="#">
                                Change
                                </a>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="w-1/3 block text-gray-700 text-sm font-bold mb-2">                                
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="UserAddress" type="text" placeholder="UserAddress"/>                             
                                </div>
                                <a className="inline-block align-baseline font-regular text-sm text-blue-500 hover:text-blue-800" href="#">
                                Change
                                </a>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="w-1/3 block text-gray-700 text-sm font-bold mb-2">                                
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="UserPhone" type="text" placeholder="UserPhone"/>                             
                                </div>
                                <a className="inline-block align-baseline font-regular text-sm text-blue-500 hover:text-blue-800" href="#">
                                Change
                                </a>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="w-1/3 block text-gray-700 text-sm font-bold mb-2">                                
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="text" placeholder="Email"/>                             
                                </div>
                                <a className="inline-block align-baseline font-regular text-sm text-blue-500 hover:text-blue-800" href="#">
                                Change
                                </a>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="w-1/3 block text-gray-700 text-sm font-bold mb-2">                                
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="UserName" type="text" placeholder="UserName"/>                             
                                </div>
                                <a className="inline-block align-baseline font-regular text-sm text-blue-500 hover:text-blue-800" href="#">
                                Change
                                </a>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="w-1/3 block text-gray-700 text-sm font-bold mb-2">                                
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Password" type="password" placeholder="Password"/>                             
                                </div>
                                <a className="inline-block align-baseline font-regular text-sm text-blue-500 hover:text-blue-800" href="#">
                                Change
                                </a>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="w-1/3 block text-gray-700 text-sm font-bold mb-2">                                
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Tokens" type="text" placeholder="Tokens"/>                             
                                </div>
                                <a className="inline-block align-baseline font-regular text-sm text-blue-500 hover:text-blue-800" href="#">
                                Change
                                </a>
                            </div>

                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Save
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}