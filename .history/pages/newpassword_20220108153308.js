import { useRouter } from 'next/router';
import Layout from '../layouts/Layout'

export default NewPassword;

function NewPassword() {
    const router = useRouter();
    return (
        <Layout>
            <div className="newpassword_container">
                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Change Password">
                                Email
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}