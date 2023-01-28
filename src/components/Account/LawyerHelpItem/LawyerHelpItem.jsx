import React from 'react';
import styles from "./LawyerHelpItem.module.scss";

const LawyerHelpItem = ({item}) => {
    console.log(item);
    return (
        <div className={styles.lawyerHelpItem}>
            <header className={styles.lawyerHelpHeader}>
                <h2 className={styles.lawyerHelpHeader__text}>{item.message}</h2>
            </header>
        </div>
    )
}

export default LawyerHelpItem;