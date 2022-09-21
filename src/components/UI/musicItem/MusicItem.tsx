import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { fetchSongItem } from '../../../redux/songItemSlice'
import classes from './MusicItem.module.css'

interface MusicItemProps {
    song: {
        id: number,
        header_image_thumbnail_url: string,
        title: string,
        primary_artist: {
            name: string
        }
    }
}

const MusicItem: FC<MusicItemProps> = ({ song }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const openSongPage = () => {
        navigate('/songPage/' + song.id)
    }
    return (
        <div onClick={openSongPage} className={classes.songItem}>
            <img src={song.header_image_thumbnail_url} alt="" />
            <div className={classes.subtitle}>
                <p>{song.title}</p>
                <p>{song.primary_artist.name}</p>
            </div>
        </div>
    )
}

export default MusicItem