interface IMedia {
    provider: string;
    type: string;
    url: string;
}

interface songItem {
    id: number;
    artist_names: string;
    title: string;
    full_title: string;
    header_image_thumbnail_url: string;
    header_image_url: string;
    release_date: string;
    release_date_for_display: string;
    title_with_featured: string;
    url: string;
    primary_artist: {
        header_image_url: string;
        id: number
        name: string
        url: string
    }
    media: IMedia[]
}

export interface songRes { response: { song: songItem } }