var fs = require("fs");
var inquirer = require("inquirer");

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


        let page = ``

    fs.writeFile("README.md", page, function(err) {

    if (err) {
        return console.log(err);
    }

    console.log("Success!");

    })
});