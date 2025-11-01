export interface Lodging {
    id: number;
    name: string;
    description: string;
    pricePerNight: number;
    imageUrl: string;
}

export interface Boat {
    id: number;
    name: string;
    capacity: number;
    pricePerHour: number;
    imageUrl: string;
}

export interface Booking {
    id: number;
    lodgingId: number;
    boatId: number;
    startDate: string;
    endDate: string;
    customerName: string;
    customerEmail: string;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}