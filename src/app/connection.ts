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

export function travelMethodName(travelMethod: TravelMethod): string | undefined {
    switch (travelMethod) {
        case TravelMethod.TAXI:
            return "Taxi";
        case TravelMethod.BUS:
            return "Bus";
        case TravelMethod.UNDERGROUND:
            return "Underground";
        case TravelMethod.FERRY:
            return "Ferry";
        default:
            return undefined;
    }
}