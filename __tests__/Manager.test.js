const Manager = require("../lib/Manager");


// test to create manager object
test('test that creates a manager object', () => {
    // random variable manager to test
            const manager = new Manager('Reagan', 10000, 'rtprice21@gmail.com', 200);
    // Creates tests that checks if name and email are strings and id and office number are numbers
            expect(manager.name).toEqual(expect.any(String));
            expect(manager.id).toEqual(expect.any(Number));
            expect(manager.email).toEqual(expect.any(String));
            expect(manager.officeNumber).toEqual(expect.any(Number));
        });