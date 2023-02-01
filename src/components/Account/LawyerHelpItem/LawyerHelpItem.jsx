import React, { useContext } from 'react';
import styles from "./LawyerHelpItem.module.scss";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index"

const LawyerHelpItem = () => {
    const {lawyer} = useContext(Context);

    return (
        <div className={styles.lawyerHelpItem}>
            <header className={styles.lawyerHelpHeader}>
                <h2 className={styles.lawyerHelpHeader__text}>{lawyer.lawyerHelp.message}</h2>
            </header>
            <main className={styles.lawyerHelperAnswers}>
                {lawyer.lawyerHelp?.answers?.map((answer, index) =>
                    parseInt(answer[0]) === 1000 ? 
                        // <UIInput
                        <div>dd</div>
                    :
                        <div 
                            key={index} 
                            onClick={() => lawyer.getSelectedLawyerHelp(answer[1])} 
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