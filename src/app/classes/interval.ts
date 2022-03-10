interface Producer{
    producer: String,
    interval: number,
    previousWin: number,
    followingWin: number
}

export interface Interval{
    min: Producer[],
    max: Producer[]
}