import React, { useContext } from 'react';
import styles from "./LawyerHelpItem.module.scss";
import { useNavigate } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import { Context}  from "../../../index"
import classNames from 'classnames';
import UIButton from '../../../UI/UIButton/UIButton';
import AddLawyerItemButton from '../AddLawyerItemButton/AddLawyerItemButton';
import { toJS } from 'mobx';

const LawyerHelpItem = () => {
    const {lawyer} = useContext(Context);
    const navigate = useNavigate();

    const onSelectAnswer = (answer) => {
        if(answer[1] === 101) {
            navigate('/lk/generate-question')
            const stack = JSON.parse(localStorage.getItem('nodeIdStack'));
            stack.push(100);
            const toStringStack = JSON.stringify(stack);
            localStorage.setItem('nodeIdStack', toStringStack);
        } else {
            lawyer.getSelectedLawyerHelp(answer[1])
            navigate(`/lk/account/${answer[1]}`)
        }
    }

    console.log(toJS(lawyer.lawyerHelp?.answers))

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
                <AddLawyerItemButton />
            </main>
            {lawyer.lawyerHelp?.node_id !== "1" && 
                <UIButton onClick={() => {
                    lawyer.getPreviousLawyerHelp(1);
                    navigate(-1);
                }}>
                    Назад
                </UIButton>
            }
        </div>
    )
}

export default observer(LawyerHelpItem);