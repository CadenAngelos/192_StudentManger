import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

import styles from './Header.module.css';


function Header() {
	const router = useRouter();

    return (
        <>
			<div className={styles.bottom}>
				<div className={styles.bottom_nav_bar}>
					<ul>
						<li className={ router.asPath === '/' ? styles.active : ''}>
						<Link href="/">
							<a>Home</a>
						</Link>
						</li>
						<li  className={ router.asPath === '/courses' ? styles.active : ''}><Link href="/location"><a>Courses</a></Link></li>
						<li  className={ router.asPath === '/about' ? styles.active : ''}><Link href="/utilities"><a>About Us</a></Link></li>
						<li  className={ router.asPath === '/contact' ? styles.active : ''}><Link href="/library"><a>Contact Us</a></Link></li>
					</ul>
				</div>
				<div className={styles.bottom_contact_search_btn}>
					<div className={styles.bottom_contact_search_btn__btn}>
						<a href="#">Register</a>
					</div>
					<div className={styles.bottom_contact_search_btn__btn}>
						<a href="pages/login.js">Login</a>
					</div>
				</div>
			</div>
        </>
    )
}

export default Header
