import React from 'react';
import styles from "./UIButton.module.scss";
import classNames from 'classnames';

const UIButton = ({children, snowyBtn, ...props}) => {
    return (
        <button 
            className={classNames(styles.uiButton, {
                [styles.snowyBtn]: snowyBtn
            })} 
            {...props}
        >
            {children}
        </button>
    )
}

export default UIButton