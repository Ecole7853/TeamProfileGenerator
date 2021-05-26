const Engineer = require("../lib/Engineer");

test("for name in our Engineer class", () => {
    const newEmployee = new Engineer("Eric", 5, "email@email.com", "ecole")
    expect(newEmployee.name).toBe("Eric")
})
test("for id in our Engineer class", () => {
    const newEmployee = new Engineer("Eric", 5, "email@email.com", "ecole")
    expect(newEmployee.id).toBe(5)
})
test("for email in our Engineer class", () => {
    const newEmployee = new Engineer("Eric", 5, "email@email.com", "ecole")
    expect(newEmployee.email).toBe("email@email.com")
})
test("for email in our Engineer class", () => {
    const newEmployee = new Engineer("Eric", 5, "email@email.com", "ecole")
    expect(newEmployee.gitHub).toBe("ecole")
})
test("for role in our Engineer class", () => {
    const newEmployee = new Engineer("Eric", 5, "email@email.com", "ecole")
    expect(newEmployee.getRole()).toBe("Engineer")
})