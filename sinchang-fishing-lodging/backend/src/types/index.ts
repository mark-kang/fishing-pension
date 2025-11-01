export interface Boat {
    id: string;
    name: string;
    capacity: number;
    pricePerHour: number;
    description: string;
    imageUrl: string;
}

export interface Lodging {
    id: string;
    name: string;
    capacity: number;
    pricePerNight: number;
    description: string;
    imageUrl: string;
}

export interface Booking {
    id: string;
    lodgingId: string;
    boatId: string;
    userId: string;
    startDate: string;
    endDate: string;
    totalPrice: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
}