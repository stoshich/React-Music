import React, { FC } from 'react'
import classes from './MainButton.module.css'

interface MainButtonProps {
    children: React.ReactNode
}

const MainButton: FC<MainButtonProps> = ({ children }) => {
    return (
        <button className={classes.mainBtn}>{children}</button>
    )
}

export default MainButton