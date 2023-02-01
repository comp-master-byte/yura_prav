import React, { useContext } from 'react';
import styles from "./LawyerHelpItem.module.scss";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index"
import classNames from 'classnames';
import UIButton from '../../../UI/UIButton/UIButton';

const LawyerHelpItem = () => {
    const {lawyer} = useContext(Context);

    return (
        <div className={styles.lawyerHelpItem}>
            <header className={styles.lawyerHelpHeader}>
                <h2 className={styles.lawyerHelpHeader__text}>{lawyer.lawyerHelp.message}</h2>
            </header>
            <main className={classNames(styles.lawyerHelperAnswers, {
                [styles.withoutMarginBottom]: lawyer.lawyerHelp?.node_id === "1"
            })}>
                {lawyer.lawyerHelp?.answers?.map((answer, index) =>
                    parseInt(answer[0]) === 1000 ? 
                        <></>
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
            {lawyer.lawyerHelp?.node_id !== "1" && <UIButton onClick={() => lawyer.getPreviousLawyerHelp()}>Назад</UIButton>}
        </div>
    )
}

export default observer(LawyerHelpItem);