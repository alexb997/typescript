interface Person {
    name: string;
    age: number;
    greet(): string;
}

const person: Person = {
    name: "Alice",
    age: 25,
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

//alias
type Point = {
    x: number;
    y: number;
};

const point: Point = { x: 10, y: 20 };

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

const favoriteColor: Color = Color.Blue;

//literal type
type Status = "success" | "error" | "loading";

const requestStatus: Status = "success";

console.log(person.greet());
console.log(point);
console.log(favoriteColor);
console.log(requestStatus);