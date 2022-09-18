import React, { FC } from 'react'
import classes from './SmallButton.module.css'

interface SmallButtonProps {
    children: React.ReactNode;
    onClick?: React.ReactEventHandler
}

const SmallButton: FC<SmallButtonProps> = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className={classes.button}>{children}</button>
    )
}

export default SmallButton