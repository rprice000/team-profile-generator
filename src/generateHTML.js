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