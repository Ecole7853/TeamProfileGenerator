const Intern = require("../lib/Intern");

test("for name in our Intern class", () => {
    const newEmployee = new Intern("Eric", 5, "email@email.com", "trilogy")
    expect(newEmployee.name).toBe("Eric")
})
test("for id in our Intern class", () => {
    const newEmployee = new Intern("Eric", 5, "email@email.com", "trilogy")
    expect(newEmployee.id).toBe(5)
})
test("for email in our Intern class", () => {
    const newEmployee = new Intern("Eric", 5, "email@email.com", "trilogy")
    expect(newEmployee.email).toBe("email@email.com")
})
test("for school in our Intern class", () => {
    const newEmployee = new Intern("Eric", 5, "email@email.com", "trilogy")
    expect(newEmployee.school).toBe("trilogy")
})
test("for role in our Intern class", () => {
    const newEmployee = new Intern("Eric", 5, "email@email.com", "trilogy")
    expect(newEmployee.getRole()).toBe("Intern")
})