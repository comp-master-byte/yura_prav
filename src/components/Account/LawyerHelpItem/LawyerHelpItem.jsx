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
            <header className={classNames(styles.lawyerHelpHeader, {
                [styles.withoutMarginBottom]: !lawyer.lawyerHelp?.answers?.length
            })}>
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
            {lawyer.lawyerHelp?.node_id !== "1" && <UIButton onClick={() => lawyer.getPreviousLawyerHelp()}>Назад</UIButton>}
        </div>
    )
}

export default observer(LawyerHelpItem);