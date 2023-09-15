import React from 'react';

type ButtonProps = {
    title?: string
    callBack: () => void
    icon?: string
    style: string
    isDisabled: boolean
}

const Button: React.FC<ButtonProps> = ({title, icon, callBack, style, isDisabled}) => {
    const onClickHandler = () => {
        callBack()
    }

    return <button
        className={style}
        disabled={isDisabled}
        onClick={onClickHandler}>
        { icon && <img src={icon} alt="iconForButton"/>}
        { title && title}
    </button>
};

export default Button;