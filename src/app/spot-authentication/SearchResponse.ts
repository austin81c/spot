export class SearchResponse {
    artists: ArtistResult;
}

export class ArtistResult {
    href: string;
    items: SearchItem[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export class SearchItem {
    external_urls: ExternalUrls;
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: SearchImage[];
    name: string;
    popularity: number;
    type: string;
    url: string;
}

export class ExternalUrls {
    spotify?: string;
}

export class Followers {
    href: string;
    total: number;
}

export class SearchImage {
    height: number;
    url: string;
    width: number;
}