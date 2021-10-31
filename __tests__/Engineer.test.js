// Dependency statements
const Engineer = require('../lib/Engineer');


// test to create engineer object
test('test that creates an engineer object', () => {
// random variable engineer to test
          const engineer = new Engineer('Reagan', 10000, 'rtprice21@gmail.com', 'rprice000');
// Creates tests that checks if name, email, and github are strings and id is a number
          expect(engineer.name).toEqual(expect.any(String));
          expect(engineer.id).toEqual(expect.any(Number));
          expect(engineer.email).toEqual(expect.any(String));
          expect(engineer.github).toEqual(expect.any(String));
});