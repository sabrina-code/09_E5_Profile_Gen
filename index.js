
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
const generateHTML = require("./generateHTML.js");
const fs = require('fs'),
    convertFactory = require('electron-html-to');

const writeFileAsync = util.promisify(fs.writeFile);

inquirer.prompt([
        {
          type: "input",
          name: "username",
          message: "Please enter your GitHub user name."
        },
        {
          type: "list",
          name: "favcolor",
          choices: [
              "beige",
              "blue",
              "pink",
              "ceramic"
          ],
          message: "Please select a favorite color."    
        }
    ]).then(({ username, favcolor}) => {
      const queryUrl = `https://api.github.com/users/${username}`;
  
      axios.get(queryUrl)
        .then(response => {
          const data = {
              profilePic: response.data.avatar_url,
              name: response.data.name,
              company: response.data.company,
              location: response.data.location,
              html_url: response.data.html_url,
              blog: response.data.blog,
              bio: response.data.bio,
              repos: response.data.public_repos,
              followers: response.data.followers,
              following: response.data.following,
              star: response.data.public_gists             
          };

      const profile = generateHTML({favcolor, ...data});
      
      return writeFileAsync("index.html", profile);  

      }).then(function () {
        var htmlPdf = fs.readFileSync('./index.html', 'utf8');

        var conversion = convertFactory({
          converterPath: convertFactory.converters.PDF
        });
         
        conversion({ html: htmlPdf }, function(err, result) {
          if (err) {
            return console.error(err);
          }       
          console.log(result.numberOfPages);
          console.log(result.logs);
          result.stream.pipe(fs.createWriteStream('./index.pdf'));
          conversion.kill(); // necessary if you use the electron-server strategy
        });
      });
    });  
