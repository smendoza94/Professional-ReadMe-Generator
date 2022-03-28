// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = 'README.md';

// TODO: Create an array of questions for user input
// const questions = [
//     // inquiry array to prompt the user to disclose the following information:
//     // title, description, installation, usage, usageImg, collaborator, 
//     // tests, date, name, email, gitHubUser, and license
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is your full name?',
//         validate: input => {
//             if(input){
//                 return true;
//             } else {
//                 console.log('Please enter your full name!')
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'Enter your public contact email:',
//         validate: input => {
//             if(input) {
//                 return true;
//             } else {
//                 console.log('Please enter your contact email!')
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'gitHubUser',
//         message: 'Enter your GitHub Username:',
//         validate: input => {
//             if(input) {
//                 return true;
//             } else {
//                 console.log('Please enter your Git username!')
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'title',
//         message: 'What is the name of your project?',
//         validate: input => {
//             if(input) {
//                 return true;
//             } else {
//                 console.log("Please enter your your project's name!")
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'date',
//         message: 'What is the date your porject was published?'
//     },
//     {
//         type: 'input',
//         name: 'collaborator',
//         message: 'Please provide your collaborators GitHub username:'
//         // List your collaborators, if any, with links to their GitHub profiles.
//         // If you used any third-party assets that require attribution, 
//         // list the creators with links to their primary web presence in this section.
//         // If you followed tutorials, include links to those here as well.
//     },
//     {
//         type: 'input',
//         name: 'description',
//         message: `Provide a short description explaining the what, why, and how of your project:
//         - What was your motivation?
//         - Why did you build this project?
//         - What problem does it solve?
//         - What did you learn?`,
//         validate: input => {
//             if(input) {
//                 return true;
//             } else {
//                 console.log('Please enter your name!')
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'installation',
//         message: `What are the steps required to install your project? 
//         Provide a step-by-step description of how to get the development environment running.`,
//         validate: input => {
//             if(input) {
//                 return true;
//             } else {
//                 console.log('Please enter install guidance to run your project!')
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'usage',
//         message: `Provide instructions and examples for use of your project:`,
//         validate: input => {
//             if(input) {
//                 return true;
//             } else {
//                 console.log('Please enter instructions to use your project!')
//             }
//         }
//     },
//     {
//         type: 'confirm',
//         name: 'confirmUsageImg',
//         message: 'Would you like to provide an image example of your project being used?',
//         default: false
//     },
//     {
//         type: 'input',
//         name: 'usageImg',
//         message: 'Provide an image link to an example of use:',
//         when: ({confirmUsageImg}) => {
//             if (confirmUsageImg) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'tests',
//         message: 'What are some tests users can run on your project to esnure it is working as intented?'
//     },
//     {
//         type: 'checkbox',
//         name: 'license',
//         message: 'Select a license for your project to be displayed:',
//         choices: ['MIT License','Apache License 2.0','GNU General Public License v3.0']
//     }
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}`, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({ok: true, message: 'Read Me File Created! Locted in the /dist folder.'})
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt([
        // inquiry array to prompt the user to disclose the following information:
        // title, description, installation, usage, usageImg, collaborator, 
        // tests, date, name, email, gitHubUser, and license
        {
            type: 'input',
            name: 'name',
            message: 'What is your full name?',
            validate: input => {
                if(input){
                    return true;
                } else {
                    console.log('Please enter your full name!')
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your public contact email:',
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log('Please enter your contact email!')
                }
            }
        },
        {
            type: 'input',
            name: 'gitHubUser',
            message: 'Enter your GitHub Username:',
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log('Please enter your Git username!')
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log("Please enter your your project's name!")
                }
            }
        },
        {
            type: 'input',
            name: 'date',
            message: 'What is the date your porject was published?'
        },
        {
            type: 'input',
            name: 'collaborator',
            message: 'Please provide your collaborators GitHub username:'
            // List your collaborators, if any, with links to their GitHub profiles.
            // If you used any third-party assets that require attribution, 
            // list the creators with links to their primary web presence in this section.
            // If you followed tutorials, include links to those here as well.
        },
        {
            type: 'input',
            name: 'description',
            message: `Provide a short description explaining the what, why, and how of your project:
            - What was your motivation?
            - Why did you build this project?
            - What problem does it solve?
            - What did you learn?`,
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log('Please enter your name!')
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: `What are the steps required to install your project? 
            Provide a step-by-step description of how to get the development environment running.`,
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log('Please enter install guidance to run your project!')
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: `Provide instructions and examples for use of your project:`,
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log('Please enter instructions to use your project!')
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmUsageImg',
            message: 'Would you like to provide an image example of your project being used?',
            default: false
        },
        {
            type: 'input',
            name: 'usageImg',
            message: 'Provide an image link to an example of use:',
            when: ({confirmUsageImg}) => {
                if (confirmUsageImg) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are some tests users can run on your project to esnure it is working as intented?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select a license for your project to be displayed:',
            choices: ['MIT License','Apache License 2.0','GNU General Public License v3.0']
        }
    ]);
}

// Function call to initialize app
init()
    .then(readMeData => {
        return generateMarkdown(readMeData);
    })
    .then(pageReadMe => {
        return writeToFile(fileName, pageReadMe);
    })
    .catch(err => {
        console.log(err);
    });
