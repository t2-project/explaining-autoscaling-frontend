export interface EventSet {
    _id: string;
    name: string;
    namespace: string;
    firstEvent: string;
    lastEvent: string;
    reason: string;
    count: number;
    scalingType: string;
    events: [];
}
