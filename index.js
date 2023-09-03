import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";




// var qr = require('qr-image');




inquirer
  .prompt([
    {"message": "Type in your URL: ",
    "name": "URL"}
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));


    fs.writeFile('URL.txt', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }); 


  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      
    }
  });




  
 


