interface User {
    id: number;
    name: string;
    email: string;
}

function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
}

const readonlyUser: Readonly<User> = {
    id: 1,
    name: "alex",
    email: "alex@example.com"
};

// readonlyUser.name = "Bob"; //Cannot assign to 'name' because it is a read-only property.

function isString(value: unknown): value is string {
    return typeof value === "string";
}

function formatInput(input: string | number): string {
    if (isString(input)) {
        return `String: ${input.toUpperCase()}`;
    } else {
        return `Number: ${input.toFixed(2)}`;
    }
}

const user: User = { id: 1, name: "Alex", email: "alex@example.com" };
console.log(updateUser(user, { email: "jack@example.com" }));

console.log(formatInput("hello"));
console.log(formatInput(42.5678));
