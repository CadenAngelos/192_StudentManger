import Head from "next/head";
import Image from "next/image";
import Layout from "../layouts/Layout";
import styles from "../styles/Home.module.css";
import News0 from "../components/News/News0";
import Rewards from "../components/Rewards/Rewards";
import Counsel from "../components/Counsel/Counsel";
import Banner from "../components/Banner/Banner";
export default function Home() {
	return (
		<Layout>
			<Banner />
			<div className={styles.genernal_intro_container}>
				<div>
					<img
						className={styles.general_intro__img}
						src="images/picIntro.png"
						alt="General Intro Image"
					/>
				</div>
				<div className={styles.general_intro__text}>
					<div className={styles.title}>TAKE CONTROL</div>
					<div className={styles.general_intro__textContent}>
						<p>
							In order to make student management more easier and
							handier. We (2 student with passion of coding) have
							made this tool for manage stydent. With courses and
							students list, class lists, reports ... you can easy
							handle it with just one click!!
						</p>
					</div>
					<div className={styles.general_intro__btn}>
						<a href="#">SEE MORE</a>
					</div>
				</div>
			</div>
			<News0 />
			<Counsel />
		</Layout>
	);
}
