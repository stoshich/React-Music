import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from '../../../redux/musicBoxSlice';
import { AppDispatch, RootState } from '../../../redux/store/store';
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
        <div>
            <div>{title}</div>
            <div className={classes.musicBox}>
                {songsData?.response.songs.map(song =>
                    <div className={classes.songItem} key={song.id}>
                        <img src={song.header_image_thumbnail_url} alt="" />
                        <div className={classes.subtitle}>
                            {song.title}
                            <div>{song.primary_artist.name}</div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default MusicByCategory