import { calculator } from "./calculator";

it("Adding", () => {
    expect(calculator.add(2, 3)). toBe(5);
});

it("Subtracting a < b", () => {
    expect(calculator.subtract(2, 3)). toBe(-1);
});

it("Subtracting a > b", () => {
    expect(calculator.subtract(5, 3)). toBe(2);
});

it("Multiply", () => {
    expect(calculator.multiply(5, 3)). toBe(15);
});

it("Divide by zero", () => {
    expect(calculator.divide(5, 0)). toBe("Not a number...");
});

it("Divide a < b", () => {
    expect(calculator.divide(1, 2)). toBe(0.5);
});

it("Divide a > b", () => {
    expect(calculator.divide(10, 2)). toBe(5);
});

