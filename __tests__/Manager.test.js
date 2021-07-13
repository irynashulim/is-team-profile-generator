const exp = require("constants");
const Manager = require("../lib/Manager")

test('creates an Manager object', () => {
    const manager = new Manager("Bob", 19, "email@email.com", 2219);
    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole()).toBe("Manager");
})