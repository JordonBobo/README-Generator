
const fs = require("fs");
const inquirer = require("inquirer");

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
  fs.writeFile(`README.md`, 
`
# ${response.title}
![GitHub License](https://img.shields.io/badge/license-${response.license}-blue.svg)

### Table of Contents:
1. [Description](#description)
2. [How to install](#How to install)
3. [Contribution Guidelines](#Contribution Guidelines)
4. [Test instructions](#Test instructions)
5. [License](#License)
8. [Contact info](#Questions?)

### description
${response.description}

### How to install
${response.install}

### Contribution Guidelines
${response.contribute}

### Test instructions
${response.test}

### License
This repo is under the ${response.license} license

### Questions?
Feel free to reach out to me with questions. \n
[https://github.com/${response.github}](#https://github.com/${response.github}) \n
Or you can email me at ${response.email}
`, 
    (err) =>   
    err ? console.error(err) : console.log("ReadMe created successfully")
  );
})











