import React from 'react';
import styles from "./LawyerHelpItem.module.scss";
import {observer} from "mobx-react-lite";

const LawyerHelpItem = ({item}) => {
    return (
        <div className={styles.lawyerHelpItem}>
            <header className={styles.lawyerHelpHeader}>
                <h2 className={styles.lawyerHelpHeader__text}>{item.lawyerHelp.message}</h2>
            </header>
            <main className={styles.lawyerHelperAnswers}>
                {item.lawyerHelp?.answers?.map((answer, index) =>
                    parseInt(answer[0]) === 1000 ? 
                        // <UIInput
                        <div>dd</div>
                    :
                        <div 
                            key={index} 
                            onClick={() => item.getSelectedLawyerHelp(answer[1])} 
                            className={styles.lawyerHelperAnswer}
                        >
                            {answer[0]}
                        </div>
                )}
            </main>
        </div>
    )
}

export default observer(LawyerHelpItem);