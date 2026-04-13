export interface GetDevelopersResponse {
    count: number
    next: string
    previous: string | null
    results: Developer[]
}

export interface Developer {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
    games: Game[]
}

export interface Game {
    id: number
    slug: string
    name: string
    added: number
}
