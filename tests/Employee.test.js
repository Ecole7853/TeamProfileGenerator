const Employee = require("../lib/Employees");

test("for name in our employee class", () => {
    const newEmployee = new Employee("Eric", 5, "email@email.com")
    expect(newEmployee.name).toBe("Eric")
})
test("for id in our employee class", () => {
    const newEmployee = new Employee("Eric", 5, "email@email.com")
    expect(newEmployee.id).toBe(5)
})
test("for email in our employee class", () => {
    const newEmployee = new Employee("Eric", 5, "email@email.com")
    expect(newEmployee.email).toBe("email@email.com")
})
test("for role in our employee class", () => {
    const newEmployee = new Employee("Eric", 5, "email@email.com")
    expect(newEmployee.getRole()).toBe("Employee")
})