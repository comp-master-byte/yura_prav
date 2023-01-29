import React from 'react';
import styles from "./LawyerHelpItem.module.scss";
import {observer} from "mobx-react-lite";

const LawyerHelpItem = ({item}) => {

    return (
        <div className={styles.lawyerHelpItem}>
            <header className={styles.lawyerHelpHeader}>
                <h2 className={styles.lawyerHelpHeader__text}>{item.message}</h2>
            </header>

            <main className={styles.lawyerHelperAnswers}>
                {item?.answers?.map(answer=>
                    <div key={answer[1]} className={styles.lawyerHelperAnswer}>{answer[0]}</div>
                )}
            </main>
        </div>
    )
}

export default observer(LawyerHelpItem);