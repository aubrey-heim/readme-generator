const fs = require("fs");
const inquirer = require("inquirer");

inquirer
.prompt([
    {
      type: "input",
      message: "What is your name?",
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
        default: this.repo
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
        name: "contribution"
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

        const {} = response


        let page = `# TITLE

        ## Table of Contents
        * [Description](#description)
            * [Deployed Application](#deployed-application)
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributing](#contributing)
        * [Tests](#test)
        * [Questions](#questions)
          
        ## Description
        
        ### Deployed Application
        <img src="FILE PATH" alt="IMAGE/GIF/VIDEO of deployed page in use">

        ## Installation

        ## Usage

        ## License        
        
        ## Contributing

        ## Tests

        ## Questions
       
        `
        
    fs.writeFile("README.md", page, function(err) {

    if (err) {
        return console.log(err);
    }

    console.log("Success!");

    })
});