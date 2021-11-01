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
// creates profile array of user input that will be displayed on the HTML page
  htmlProfilesArray = [];
// for loop to run through each user input
  for (let i=0; i < data.length; i++) {
// creates new employee variable based on the number of employee objects created
    const newEmployee = data[i];
// creates employee role variable based upon the role assigned to the new employee object
    const employeeRole = newEmployee.getRole();
// If new employee is an engineer; takes user data to create new engineer data variable    
    if (employeeRole === 'Engineer') {
      const newEngineerData = createEngineer(newEmployee);
// Pushes engineer data to html profile array
      htmlProfilesArray.push(newEngineerData);
    }
// If new employee is an intern; takes user data to create new eintern data variable  
    if (employeeRole === 'Intern') {
      const newInternData = createIntern(newEmployee);
// Pushes intern data to html profile array
      htmlProfilesArray.push(newInternData);
    }
// If new employee is an manager; takes user data to create new manager data variable  
    if (employeeRole === 'Manager') {
      const newManagerData = createManager(newEmployee);
// Pushes manager data to html profile array
      htmlProfilesArray.push(newManagerData)
    }
  }
// Joins all profiles into one employee profiles variable
  const employeeProfiles = htmlProfilesArray.join('')
// creates variable that equals the parameters in teamProfilePage function
  const generateNewTeam = teamProfilePage(employeeProfiles);
  return generateNewTeam;
}





// Generates the HTML code to be displayed on index.html
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