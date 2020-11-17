
export interface Geolocation {
    lat: number,
    lon: number,
    zoom: number
}
export interface Address {
    postCode: string,
    street: string,
    district: string,
    city: string,
    state: string,
    geolocation: Geolocation
}
export interface Practice {
    practiceId: Number;
    name: string;
    address: Address
}
