import React, { FC } from 'react'
import classes from './MediumButton.module.css'

interface MediumButtonProps {
    children: React.ReactNode;
    onClick?: React.ReactEventHandler
}


const MediumButton: FC<MediumButtonProps> = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className={classes.button}>{children}</button>
    )
}
export default MediumButton