import Layout from "../../layouts/Layout";
import styles from "../../styles/teacher/Courses0.module.css";
import Link from "next/link";
export default function Courses() {
	return (
		<Layout>
			<div className="max-w-2xl mx-auto sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="flex justify-end gap-7">
					<div className={styles.teacher_btn__btn}>
						<Link href="/teacher/addCourse">
							Thêm tiết học bổ sung
						</Link>
					</div>
					<div className={styles.teacher_btn__btn}>
						<Link href="/teacher/assess">Đánh giá học sinh</Link>
					</div>
				</div>
				<div className={styles.title}>DANH SÁCH TIẾT HỌC</div>

				<div className="mt-6 grid grid-cols-1 gap-y-12 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-16">
					<div className="group relative">
						<div className="w-full min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
							<img
								src="../images/course.png"
								className="w-full h-full object-center object-cover lg:w-full lg:h-full"
							/>
						</div>
						<div className="mt-4 flex justify-between">
							<div>
								<h3 className="text-base font-bold">
									<a href="../teacher/videos">
										<span
											aria-hidden="true"
											className="absolute inset-0"
										/>
										Ứng dụng của tích phân trong hình học
									</a>
								</h3>
								<p className="mt-1 text-xs text-gray-500">
									Aeneam imperdiet dignissim pulvinar. Nunv
									euismod dignissim pulbinar. So many tholj
									culem. Simply dummy text of the printing and
									typesetting.
								</p>
							</div>
						</div>
					</div>

					<div className="group relative">
						<div className="w-full min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
							<img
								src="../images/course.png"
								className="w-full h-full object-center object-cover lg:w-full lg:h-full"
							/>
						</div>
						<div className="mt-4 flex justify-between">
							<div>
								<h3 className="text-base font-bold">
									<a href="../teacher/videos">
										<span
											aria-hidden="true"
											className="absolute inset-0"
										/>
										Ứng dụng của tích phân trong hình học
									</a>
								</h3>
								<p className="mt-1 text-xs text-gray-500">
									Aeneam imperdiet dignissim pulvinar. Nunv
									euismod dignissim pulbinar. So many tholj
									culem. Simply dummy text of the printing and
									typesetting.
								</p>
							</div>
						</div>
					</div>
					<div className="group relative">
						<div className="w-full min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
							<img
								src="../images/course.png"
								className="w-full h-full object-center object-cover lg:w-full lg:h-full"
							/>
						</div>
						<div className="mt-4 flex justify-between">
							<div>
								<h3 className="text-base font-bold">
									<a href="../teacher/videos">
										<span
											aria-hidden="true"
											className="absolute inset-0"
										/>
										Ứng dụng của tích phân trong hình học
									</a>
								</h3>
								<p className="mt-1 text-xs text-gray-500">
									Aeneam imperdiet dignissim pulvinar. Nunv
									euismod dignissim pulbinar. So many tholj
									culem. Simply dummy text of the printing and
									typesetting.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
