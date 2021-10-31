// creates card based on Engineer Object Data
const createEngineer = function (newEngineer) {
  return `
  <div>
    <h3>${newEngineer.name}</h3>
    <h4>Engineer</h4>
  </div>
  <div>
    <p>ID: ${newEngineer.id}</p>
    <p>Email: ${newEngineer.email}</p>
    <p>Github: ${newEngineer.github}</p>
  </div>
  `
};

// creates card based on Intern Object Data 
const createIntern = function (newIntern) {
  return `
  <div>
    <h3>${intern.name}</h3>
    <h4>Intern</h4>
  </div>
  <div>
    <p>ID: ${intern.id}</p>
    <p>Email: ${intern.email}</p>
    <p>School: ${intern.school}</p>
  </div>
  `
};

// creates card based on Manager Object Data
const createManager = function (newManager) {
  return `
  <div>
    <h3>${manager.name}</h3>
    <h4>Manager</h4>
  </div>
  <div>
    <p>ID: ${manager.id}</p>
    <p>Email: ${manager.email}</p>
    <p>Office Number: ${manager.officeNumber}</p>
  </div>
  `
};








const teamProfilePage = function (profiles) {
  return `
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
  </head>
  <body>
    <header>
      <nav>
        <span>Team Profile</span>
      </nav>
    </header>
    <main>
      <div>
        <div>
          ${employeeCards}
        </div>
      </div>
    </main>
  </body>
  </html>
`;
}

module.exports = generateHTML; 