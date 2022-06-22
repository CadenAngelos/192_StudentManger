import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.css";

function Header() {
	const router = useRouter();
	const menuItems = [
		{
			title: "Home",
		},
		{
			title: "Class",
		},
		{
			title: "Student",
		},
		{
			title: "Score",
		},
		{
			title: "Report",
		},
	];
	return (
		<>
			<div className={styles.bottom}>
				<div className={styles.bottom_nav_bar}>
					<ul>
						<li
							className={
								router.asPath === "/" ? styles.active : ""
							}
						>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li
							className={
								router.asPath === "/class/class"
									? styles.active
									: ""
							}
						>
							<Link href="/class/class">
								<a>Class</a>
							</Link>
						</li>
						<li
							className={
								router.asPath === "/teacher/courses"
									? styles.active
									: ""
							}
						>
							<Link href="/teacher/courses">
								<a>Courses</a>
							</Link>
						</li>
						<li
							className={
								router.asPath === "/student/student"
									? styles.active
									: ""
							}
						>
							<Link href="/student/student">
								<a>Student</a>
							</Link>
						</li>
						<li
							className={
								router.asPath === "/score/score"
									? styles.active
									: ""
							}
						>
							<Link href="/score/score">
								<a>Score</a>
							</Link>
						</li>
						<li
							className={
								router.asPath === "/report/report"
									? styles.active
									: ""
							}
						>
							<Link href="/report/report">
								<a>Report</a>
							</Link>
						</li>

						<li
							className={
								router.asPath === "/about" ? styles.active : ""
							}
						>
							<Link href="/utilities">
								<a>About Us</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.bottom_contact_search_btn}>
					<div className={styles.bottom_contact_search_btn__btn}>
						<Link href="/signin/register">
							<a>Register</a>
						</Link>
					</div>
					<div className={styles.bottom_contact_search_btn__btn}>
						<Link href="/signin/login">
							<a>Login</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
