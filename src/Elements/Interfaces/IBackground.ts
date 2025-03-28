export interface IBackground {
    changeBackground(colorClass: string, key: Element): void
}

export interface IBackgroundExtended {
    removeBackground(colorClass: string, key: Element): void
}