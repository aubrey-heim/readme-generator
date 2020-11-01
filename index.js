const fs = require("fs");
const inquirer = require("inquirer");

inquirer
.prompt([
    {
      type: "input",
      message: "What is your full name?",
      name: "name"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your repository name?",
        name: "repo"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter a description for your project.",
        name: "description"
    },
    {
        type: "input",
        message: "A README should include an image or gif of the deployed application. Please enter the file path to your image or gif.",
        name: "path"
    },
    {
        type: "checkbox",
        message: "What type of file is this?",
        name: "file",
        choices: ["image","gif"]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install",
        default: "npm i"
    },
    {
        type: "input",
        message: "What do we need to know about using the repository?",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "What is the license for this project?",
        name: "license",
        choices: ["MIT","GNU GPLv3","Apache 2.0", "ISC"]
    },
    {
        type: "input",
        message: "What do we need to know about contributing to the repository?",
        name: "contribution",
        default: 
`Contributions to this project are welcome!
<ol>
    <li>Fork the Project</li>
    <li>Create a branch for your feature (git checkout -b feature/featureName)</li>
    <li>Commit your changes (git commit -m'Your commit message')</li>
    <li>Push your changes to the feature branch (git push origin feature/featureName)</li>
    <li>Open a pull request</li>
</ol>

Also feel free to open issues for the project.`
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm run test"
    },
    
])

.then(function(response) {

        console.log(response)

        const {name, email, github, repo, title, description, path, file, install, usage, license, contribution, tests} = response

        let licenseURL = ""
        let licenseBadge = ""

        if(response.license[0] === "GNU GPLv3"){
            licenseURL = "gpl-3.0"
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        } else if (response.license[0] === "MIT") {
            licenseURL = "mit"
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        } else if (response.license[0] === "Apache 2.0"){
            licenseURL = "apache-2.0"
            licenseBadge = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        } else if (response.license[0] === "ISC") {
            licenseURL = "isc"
            licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
        }

        if (response.install){
            response.install = `To install necessary dependencies, run the following command: ${response.install}`
        } else {
            response.install = `There are no dependencies to install for this project`
        }

        if (response.tests){
            response.tests = `To run tests on this project, run the following command: ${response.tests}`
        } else {
            response.tests = `There are no tests to run for this project`
        }

        let page =    
`# ${response.title} ${licenseBadge}

## Table of Contents
* [Description](#description)
    * [Deployed Application](#deployed-application)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Description

### Deployed Application
<img src="${response.path}" alt="${response.file} of deployed page in use">

## Installation
${response.install}

## Usage
${response.usage}

## License
This repository has a ${response.license} license. For more information on this license, please visit: https://choosealicense.com/licenses/${licenseURL}     

## Contributing
${response.contribution}

## Tests
${response.tests}

## Questions
If you have any questions, please contact ${response.name}.

GitHub: [${response.github}](https://github.com/${response.github})

Email: [${email}](mailto:${email})

`

    fs.writeFile("README.md", page, function(err) {

    if (err) {
        return console.log(err);
    }

    console.log("Success!");

    })
});