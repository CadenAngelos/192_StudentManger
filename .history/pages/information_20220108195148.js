import { useRouter } from 'next/router';
import Layout from '../layouts/Layout'

export default Information;

function Information() {
    const router = useRouter();
    return (
        <Layout>
            <div className="information_container">
                <div className="w-full maxw-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Information">
                                Information
                            </label>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Register
                                </button>
                                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="login">
                                Existing Account
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}