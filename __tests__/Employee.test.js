// Dependency statements
const Employee = require("../lib/Employee");


// test to create employee object
test('test that creates an employee object', () => {
// random variable employee to test
          const employee = new Employee('Reagan', 10000, 'rtprice21@gmail.com');
// Creates tests that checks if name and email are strings and id is a number
          expect(employee.name).toEqual(expect.any(String));
          expect(employee.id).toEqual(expect.any(Number));
          expect(employee.email).toEqual(expect.any(String));
});
