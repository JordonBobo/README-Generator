
const fs = require("fs");
const inquirer = require("inquirer");

// Title, needs to be the name of the file
// sections for description, instilation, usage, contribution guidlines, and test instructions
// license, multiple choice, adds a badge near the top, and adds description of that license in a section call lcense
// github username, addss a link to the githubpage for that user in the questions section
// email, adds another line to questions section with the email
// table of contents, with links to the different sections


//template strings rather than json.stringify, needed for this project?


inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is your Title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What does it do?',
  },
  {
    type: 'input',
    name: 'install',
    message: 'How do you install it?',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How does the user contribute to it?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'How does it get tested?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose the license',
    choices: ['MIT', 'APACHE', 'GPL']
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'And lastly, your email?',
  },
])
.then((response) => {
  fs.appendFile(`README.md`, 
      `#${response.title}
      ![GitHub License](https://img.shields.io/badge/license-${response.license}-blue.svg)

      ### Table of Contents:
      1. [Description](#description:)
      2. [How to install](#How to install:)
      3. [Contribution Guidelines](#Contribution Guidelines:)
      4. [Test instructions](#Test instructions:)
      5. [License](#License)
      8. [Contact info](#Questions?)

      ### description:
      ${response.description}

      ### How to install:
      ${response.install}

      ### Contribution Guidelines:
      ${response.contribute}

      ### Test instructions:
      ${response.test}

      ### License
      This App is protected under ${response.license}

      ### Questions?
      Feel free to reach out to me with questions.
      [https://github.com/${response.github}](#https://github.com/${response.github})
      Or you can email me at ${response.email}
      `, 
    (err) =>   
    err ? console.error(err) : console.log("ReadMe created successfully")
  );
})



// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README 
// and a notice is added to the section of the README entitled License 
// that explains which license the application is covered under






