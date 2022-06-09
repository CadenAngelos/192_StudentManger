import React from 'react'
import styles from './Rewards.module.css'

function Rewards() {
    return (
        <div className={styles.reward}>          
            <img className={styles.rewardLeman} src="images/lemanLogo.svg" alt="" />
            <div className={styles.reward_title}>Resort Đạt Các Giải Thưởng Quốc Tế Nhiều Năm Liền</div>
            <div className={styles.medals_container}>
                <div className={styles.medal}>
                    <div className={styles.medalImg}>
                        <img  src="images/award.svg" alt="" />
                    </div>
                    <img src="images/booking.svg" alt="" />
                </div>
                <div className={styles.medal}>
                    <div className={styles.medalImg}>
                        <img className={styles.medalImg} src="images/award.svg" alt="" />
                </div>   
                    <img src="images/agoda.svg" alt="" />
                </div>
                <div className={styles.medal}>
                    <div className={styles.medalImg}>
                        <img className={styles.medalImg} src="images/award.svg" alt="" />
                    </div>
                    <img className={styles.tripImg} src="images/trip.svg" alt="" />
                </div>       
            </div>
        </div>
    )
}

export default Rewards
