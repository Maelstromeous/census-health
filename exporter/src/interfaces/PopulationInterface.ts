export interface PopulationInterface {
    vs: number
    nc: number
    tr: number
    total: number
}

export interface WorldPopulationInterface extends Object{
    [key: number]: PopulationInterface
}
