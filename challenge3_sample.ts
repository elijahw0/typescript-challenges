export {};

interface Car {
    model: string;
    manufacturer: string;
    year: number;
    color: string;
    inWarranty: boolean
    miles?: number;
}

const corolla: Car = {
    model: "Corolla",
    manufacturer: "Toyota",
    year: 2006,
    color: "Red",
    inWarranty: true
}