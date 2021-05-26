const Manager = require("../lib/Manager");

test("for name in our Manager class", () => {
    const newEmployee = new Manager("Eric", 5, "email@email.com", 5555555555)
    expect(newEmployee.name).toBe("Eric")
})
test("for id in our Manager class", () => {
    const newEmployee = new Manager("Eric", 5, "email@email.com", 5555555555)
    expect(newEmployee.id).toBe(5)
})
test("for email in our Manager class", () => {
    const newEmployee = new Manager("Eric", 5, "email@email.com", 5555555555)
    expect(newEmployee.email).toBe("email@email.com")
})
test("for number in our Manager class", () => {
    const newEmployee = new Manager("Eric", 5, "email@email.com", 5555555555)
    expect(newEmployee.officeNumber).toBe(5555555555)
})
test("for role in our Manager class", () => {
    const newEmployee = new Manager("Eric", 5, "email@email.com", 5555555555)
    expect(newEmployee.getRole()).toBe("Manager")
})