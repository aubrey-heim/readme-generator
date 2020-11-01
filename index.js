const fs = require("fs");
const inquirer = require("inquirer");

inquirer
.prompt([
    {
      type: "",
      message: "",
      name: ""
    },
    
])

.then(function(response) {

        console.log(response)

        const {} = response


        let page = `# TITLE

        ## Table of Contents
        * [Description](#description)
            * [Deployed Application](#deployed-application)
        * [Benefits of This Project](#benefits-of-this-project)
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