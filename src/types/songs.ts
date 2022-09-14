interface song {
    id: number
    artist_names: string
    title: string
    full_title: string
    header_image_thumbnail_url: string
    primary_artist: { name: string }
}

export interface songsDataRes {
    response: { songs: song[] }
}