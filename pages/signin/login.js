import { useRouter } from "next/router";
import Layout from "../../layouts/Layout";
import styles from "../../styles/Signin/Login.module.css";
import Link from "next/link";

export default Login;

function Login() {
	const router = useRouter();

	const handleSubmitRegister = () => {
		alert("Đăng nhập thành công");
		router.push("/");
	};
	return (
		<Layout>
			<div className={styles.login_container}>
				<div className="w-full max-w-xs">
					<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="username"
							>
								Username
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="username"
								type="text"
								placeholder="Username"
							/>
						</div>
						<div className="mb-6">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="password"
							>
								Password
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="password"
								type="password"
								placeholder="******************"
							/>
							<p className="text-red-500 text-xs italic">
								Please choose a password.
							</p>
						</div>
						<div className="flex items-center justify-between">
							{/* <Link href="/"> */}
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="button"
								onClick={handleSubmitRegister}
							>
								Sign In
							</button>
							{/* </Link> */}

							<a
								className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
								href="forgotpassword"
							>
								Forgot Password?
							</a>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
}
