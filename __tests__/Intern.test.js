// Dependency statements
const Intern = require('../lib/Intern');

// test to create intern object
test('test that creates an intern object', () => {
// random variable intern to test
            const intern = new Intern('Reagan', 10000, 'rtprice21@gmail.com', 'UH');
// Creates tests that checks if name, email, and school are strings and id is a number
            expect(intern.name).toEqual(expect.any(String));
            expect(intern.id).toEqual(expect.any(Number));
            expect(intern.email).toEqual(expect.any(String));
            expect(intern.school).toEqual(expect.any(String));
});