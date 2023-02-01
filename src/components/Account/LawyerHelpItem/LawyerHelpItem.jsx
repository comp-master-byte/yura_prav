import React, { useContext } from 'react';
import styles from "./LawyerHelpItem.module.scss";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index"
import classNames from 'classnames';
import UIButton from '../../../UI/UIButton/UIButton';
import { useNavigate } from 'react-router-dom';

const LawyerHelpItem = () => {
    const {lawyer} = useContext(Context);
    const navigate = useNavigate();

    const onSelectAnswer = (answer) => {
        if(answer[1] === 101) {
            navigate('/lk/generate-question')
        } else {
            lawyer.getSelectedLawyerHelp(answer[1])
        }
    }

    return (
        <div className={styles.lawyerHelpItem}>
            <header className={classNames(styles.lawyerHelpHeader, {
                [styles.withoutMarginBottom]: !lawyer.lawyerHelp?.answers?.length
            })}>
                <h2 className={styles.lawyerHelpHeader__text}>{lawyer.lawyerHelp.message}</h2>
            </header>
            <main className={classNames(styles.lawyerHelperAnswers, {
                [styles.withoutMarginBottom]: lawyer.lawyerHelp?.node_id === "1"
            })}>
                {lawyer.lawyerHelp?.answers?.map((answer, index) =>
                    parseInt(answer[0]) === 1000 ? 
                        <React.Fragment key={index}></React.Fragment>
                    :
                        <div 
                            key={index} 
                            onClick={() => onSelectAnswer(answer)} 
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