import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from '../../../redux/musicBoxSlice';
import { AppDispatch, RootState } from '../../../redux/store/store';
import MusicItem from '../musicItem/MusicItem';
import classes from './MusicByCategory.module.css'


interface MusicByCategoryProps {
    title: string;
    artistId: number
}


const MusicByCategory: FC<MusicByCategoryProps> = ({ title, artistId }) => {

    const songsData = useSelector((state: RootState) => state.musicBox.items)
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSongs(artistId))
        console.log(songsData)
    }, [])


    return (
        <div className={classes.contentRow}>
            <div className={classes.title}>{title}</div>
            <div className={classes.musicBox}>
                {songsData?.response.songs.map(song =>
                    <MusicItem song={song} key={song.id} />
                )}
            </div>
        </div>
    )
}

export default MusicByCategory