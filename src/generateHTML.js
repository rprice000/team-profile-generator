// creates card based on Engineer Object Data
const createEngineer = function (newEngineer) {
  return `
  <div class="column is-one-quarter">
    <div class="card">
          <div class="cardTitle is-size-3 p-3">
            <h3>${newEngineer.name}</h3>
            <h4>Engineer</h4>
          </div>
          <div class="cardData is-size-5 p-3">
            <p>ID: ${newEngineer.id}</p>
            <p>Email: <a href="${newEngineer.email}">${newEngineer.email}</a></p>
            <p>Github: <a href="${newEngineer.github}">${newEngineer.github}</a></p>
          </div>
    </div>
  </div>
  `
};

// creates card based on Intern Object Data 
const createIntern = function (newIntern) {
  return `
  <div class="column is-one-quarter">
    <div class="card">
          <div class="cardTitle is-size-3 p-3">
            <h3>${newIntern.name}</h3>
            <h4>Intern</h4>
          </div>
          <div class="cardData is-size-5 p-3">
            <p>ID: ${newIntern.id}</p>
            <p>Email: <a href="${newIntern.email}">${newIntern.email}</a></p>
            <p>School: ${newIntern.school}</p>
          </div>
    </div>
  </div>
  `
};

// creates card based on Manager Object Data
const createManager = function (newManager) {
  return `
  <div class="column is-one-quarter">
    <div class="card">
          <div class="cardTitle is-size-3 p-3">
            <h3>${newManager.name}</h3>
            <h4>Manager</h4>
          </div>
          <div class="cardData is-size-5 p-3">
            <p>ID: ${newManager.id}</p>
            <p>Email: <a href="${newManager.email}">${newManager.email}</a></p>
            <p>Office Number: ${newManager.officeNumber}</p>
          </div>
    </div>
  </div>
  `
};

// place user input that ran through cards into an array on the HTML page
generateCardData = (data) => {
  htmlProfilesArray = [];
  for (let i=0; i < data.length; i++) {
    const newEmployee = data[i];
    const employeeRole = newEmployee.getRole();
    
    if (employeeRole === 'Engineer') {
      const newEngineerData = createEngineer(newEmployee);
      htmlProfilesArray.push(newEngineerData);
    }
    if (employeeRole === 'Intern') {
      const newInternData = createIntern(newEmployee);
      htmlProfilesArray.push(newInternData);
    }
    if (employeeRole === 'Manager') {
      const newManagerData = createManager(newEmployee);
      htmlProfilesArray.push(newManagerData)
    }
  }
  const employeeProfiles = htmlProfilesArray.join('')
  const generateNewTeam = teamProfilePage(employeeProfiles);
  return generateNewTeam;
}






const teamProfilePage = function (employeeProfiles) {
  return `
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile</title>
  </head>
  <body>
    <header class="mb-5 p-3 is-size-1">
      <nav>
        <h1>My Team</h1>
      </nav>
    </header>
    <main>
      <section class="section">
        <div class="container">
          <div>
            <div class="profileHolder columns">
              ${employeeProfiles}
            </div>
          </div>
        </div>
      </section>
    </main>
  </body>
  </html>
`;
}

module.exports = generateCardData;