import React from "react";
import styles from "./Banner.module.css";
function Banner() {
	return (
		<div>
			<div className={styles.banner}>
				<span className={styles.banner_icons}>
					<img src="images/3IconBanner.svg" alt="Triad Icon" />
				</span>
			</div>
		</div>
	);
}

export default Banner;
