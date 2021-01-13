// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "Title",
            message: "What is the Title of your Project?"
        },
        {
            type: "input",
            name: "Description",
            message: "Give your project a description."
        },
        {
            type: "input",
            name: "Installation",
            message: "Enter Any installation Instructions"
        },
        {
            type: "list",
            name: "License",
            message: "Choose a license:",
            choices: [ "MIT", new inquirer.Separator(), "GPL" ]
        },
        {
            type: "input",
            name: "Usage",
            message: "What is the Usage of your application?"
        },
        {
            type: "input",
            name: "Contribution",
            message: "What are the contribution guidelines for your application?"
        },
        {
            type: "input",
            name: "Testing",
            message: "What are your testing instructions?"
        },
        {
            type: "input",
            name: "Github",
            message: "What is your Github username"
        },
        {
            type: "input",
            name: "Email",
            message: "What is your Email Address?"
        },
        {
            type: "input",
            name: "Hours",
            message: "Between what hours can you be reached at your github/email?"
        },
    ])
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

const generatetext = (answers) =>
    `# ${answers.Title}
${answers.License === 'MIT' ? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' : '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' }

## Table of Contents
[Description](#description)  
[Installation](#Installation)  
[Testing](#Testing)  
[Usage](#Usage)  
[Contribution](#Contribution)  
[License](#License)  
[Questions](#Questions)


### Description
${answers.Description}

### Installation
\`\`\`bash
${answers.Installation}
\`\`\`

### Test Instructions
${answers.Testing}

### Usage
${answers.Usage}

### Contribution Guidelines
${answers.Contribution}

### License
${answers.License}

### Questions

If you have any questions, you can reach me at my github
[${answers.Github}](https://github.com/${answers.Github})

Or my email
${answers.Email}

Between the hours of ${answers.Hours}
`;


const init = async () => {

    const answers = await promptUser();
    console.log(answers);

};

promptUser()
    .then((answers) => writeFileAsync('README.md', generatetext(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));

// Function call to initialize app
// init();
