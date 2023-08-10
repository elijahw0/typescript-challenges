export {}; // Do not touch!!

// TypeScript
interface Circle {
    type: "circle";
    radius: number;
}

interface Rectangle {
    type: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;

function calculateArea(shape: Shape): number {
    if (shape.type === "circle") {
        return Math.PI * shape.radius * shape.radius;
    } else if (shape.type === "rectangle") {
        return shape.width * shape.height;
    }
}

const circle: Circle = { type: "circle", radius: 5 };
const rectangle: Rectangle = { type: "rectangle", width: 4, height: 6 };
const triangle = { type: "triangle", base: 3, height: 8 };

const shapes: Shape[] = [circle, rectangle, triangle, { type: "square", side: 5 }];

shapes.push({ type: "circle", radius: "10" });

for (const shape of shapes) {
    console.log("Area:", calculateArea(shape));
}
