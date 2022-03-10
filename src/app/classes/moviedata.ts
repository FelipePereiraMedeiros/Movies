export interface Content {
    id: number,
    year: number,
    title: String,
    studios: String[],
    producers: String[],
    winner: boolean
}

interface Sort{
    sorted: boolean,
    unsorted: boolean,
    empty: boolean
}

interface Pageable{
    sort: Sort,
    pageSize: number,
    pageNumber: number,
    offset: number,
    paged: boolean,
    unpaged: boolean
}

export interface MovieData{
    content: Content[],
    pageable: Pageable,
    totalElements: number,
    last: boolean,
    totalPages: number,
    first: boolean,
    sort: Sort,
    number: number,
    numberOfElements: number,
    size: number
}
