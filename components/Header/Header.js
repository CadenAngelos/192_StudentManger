import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.css";

function Header() {
	const router = useRouter();

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
								router.asPath === "/about" ? styles.active : ""
							}
						>
							<Link href="/utilities">
								<a>About Us</a>
							</Link>
						</li>
						<li
							className={
								router.asPath === "/contact"
									? styles.active
									: ""
							}
						>
							<Link href="/library">
								<a>Contact Us</a>
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