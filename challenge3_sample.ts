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

interface chair {
    type:string;
    color:string | Array<string>;
    legs:number;
    hasCushion:boolean;
    size:string;
}

const diningTableChair:chair ={
    type: "glass",
    color: ["black", "white"],
    legs: 4,
    hasCushion: true,
    size: "medium"
}