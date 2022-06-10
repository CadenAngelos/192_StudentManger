import React from "react";
import styles from "./News0.module.css";
import Link from "next/link";

function News0() {
	return (
		<div className={styles.news}>
			<div className={styles.news_top}>
				<div className={styles.title}>DANH SÁCH KHÓA HỌC</div>
				<div className={styles.general_intro__btn}>
					<Link href="/">XEM THÊM</Link>
				</div>
			</div>
			<div className={styles.news_bottom}>
				<div className={styles.news_bottom__left}>
					<div className={styles.newsLeftImg}>
						<img src="images/newsLeft.svg" alt="Left img" />
					</div>
					<Link href="/class/class" className={styles.subTitle}>
						Giải tích nâng cao
					</Link>
					<div className={styles.news_content}>
						Những dạng bài tập nâng cao và vận dụng cao sẽ được
						hướng dẫn giải chi tiết, đơn giản, dễ hiểu, ...
					</div>
				</div>
				<div className={styles.news_bottom__right}>
					<div className={styles.news_bottom__right_new}>
						<div className={styles.right_img}>
							<img src="images/rightNews.png" alt="" />
						</div>
						<div className={styles.right_content}>
							<Link
								href="/class/class"
								className={styles.subTitle}
							>
								Hóa vô cơ nâng cao
							</Link>
							<div className={styles.news_content}>
								Aeneam imperdiet dignissim pulvinar. Nunv
								euismod dignissim pulbinar.
							</div>
						</div>
					</div>
					<div className={styles.news_bottom__right_new}>
						<div className={styles.right_img}>
							<img src="images/rightNews.png" alt="" />
						</div>
						<div className={styles.right_content}>
							<Link
								href="/class/class"
								className={styles.subTitle}
							>
								Hóa ứng dụng nâng cao
							</Link>
							<div className={styles.news_content}>
								Aeneam imperdiet dignissim pulvinar. Nunv
								euismod dignissim pulbinar.
							</div>
						</div>
					</div>
					<div className={styles.news_bottom__right_new}>
						<div className={styles.right_img}>
							<img src="images/rightNews.png" alt="" />
						</div>
						<div className={styles.right_content}>
							<Link
								href="/class/class"
								className={styles.subTitle}
							>
								Hóa hữu cơ nâng cao
							</Link>
							<div className={styles.news_content}>
								Aeneam imperdiet dignissim pulvinar. Nunv
								euismod dignissim pulbinar.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default News0;
