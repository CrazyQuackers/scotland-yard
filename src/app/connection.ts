export interface Connection {
    toPoint: number;
    travelMethod: TravelMethod;
};

export enum TravelMethod {
    TAXI,
    BUS,
    UNDERGROUND,
    FERRY,
};