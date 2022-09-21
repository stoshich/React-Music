import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import '../../App.css'
import './SongPage.css'
import { fetchSongItem } from '../../redux/songItemSlice'
import { useParams } from 'react-router-dom'

const SongPage = () => {
    const songItemData = useAppSelector(state => state.songItem.data)
    const status = useAppSelector(state => state.songItem.status)
    const dispatch = useAppDispatch()
    const params = useParams()
    useEffect(() => {
        dispatch(fetchSongItem(Number(params.songId)))
    }, [])

    const videoURL = songItemData?.response.song.media.find(value => value.type === 'video')?.url
    const urlId = videoURL?.slice(videoURL?.indexOf('=') + 1)


    if (status === 'loading') {
        return (<div className='wrapper'>Загрузка...</div>)
    }

    return (
        <div className='wrapper'>
            <div className='top-container'>
                <img className='music-img' src={songItemData?.response.song.header_image_thumbnail_url} alt="" />
                <div className='title'>{songItemData?.response.song.title_with_featured} - {songItemData?.response.song.artist_names}</div>
                <div className='release-date'>
                    Release date
                    <br />{songItemData?.response.song.release_date_for_display}
                </div>
                <div className='link-to-lyrics'>
                    <a href={songItemData?.response.song.url}>View lyrics on Genius</a>
                </div>
            </div>
            <div className='about-artist'>
                <img className='artist-img' src={songItemData?.response.song.primary_artist.header_image_url} alt="" />
                <div className='artist-name'>{songItemData?.response.song.artist_names}</div>
                {videoURL &&
                    <div className='video'>
                        <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + urlId} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>}
            </div>
        </div>
    )
}

export default SongPage