const { test, expect } = require("@jest/globals");
const exp = require("constants");
const Employee = require("../lib/Employee")

test('creates an Employee object', () => {
    const employee = new Employee("Bob");
    
    expect(employee.name).toBe("Bob");
    expect(employee.id).toBe(this.id);
    expect(employee.email).toBe(this.email);
    expect(employee.role).toBe("employee");
})