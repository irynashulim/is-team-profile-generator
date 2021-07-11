const { test, expect } = require("@jest/globals");
const exp = require("constants");
const Employee = require("../lib/Employee")

test('creates an Employee object', () => {
    const employee = new Employee("Bob",19,"email@email.com");
    
    expect(employee.name).toBe("Bob");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getRole()).toBe("Employee");
})