
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
    message: 'Describe what it does?',
  },
  {
    type: 'input',
    name: 'install',
    message: 'How do you install it?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use the app?',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How does a user contribute to it?',
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
    message: 'Lastly, your email?',
  },
])
.then((response) => {
  fs.mkdir(response.title, function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log("New directory successfully created.")
    }
  }),
  fs.writeFile(`./${response.title}/README.md`, 
`
# ${response.title}
![GitHub License](https://img.shields.io/badge/license-${response.license}-blue.svg)

### Table of Contents:
1. [Description](#description)
2. [How to install](#How-to-install)
3. [Usage](#Usage)
4. [Contribution Guidelines](#Contribution-Guidelines)
5. [Test instructions](#Test-instructions)
6. [License](#License)
7. [Contact info](#Questions?)

### description
${response.description}

### How to install
${response.install}

### Usage
${response.usage}

### Contribution Guidelines
${response.contribute}

### Test instructions
${response.test}

### License
This repo is under the ${response.license} license

### Questions?
Feel free to reach out to me with questions. \n
[https://www.github.com/${response.github}](#https://www.github.com/${response.github}) \n
Or you can email me at ${response.email}
`, 
    (err) =>   
    err ? console.error(err) : console.log("ReadMe created successfully")
  );
})
