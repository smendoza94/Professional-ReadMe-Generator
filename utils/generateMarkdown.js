// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}
    ![License Badge](https://img.shields.io/static/v1?label=License&message=${data.badge}&color=success)

    ## Description 
    ${data.description}
    
    Provide a short description explaining the what, why, and how of your project. 
    Use the following questions as a guide:
    - What was your motivation?
    - Why did you build this project?
    - What problem does it solve?
    - What did you learn?
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)
    
    ## Installation
    ${data.installation}
    What are the steps required to install your project? 
    Provide a step-by-step description of how to get the development environment running.
    
    ## Usage
    ${data.usage}
    Provide instructions and examples for use. Include screenshots as needed.
    ![Usage Image](${data.usageImg})
    
    ## Contributing
    [${data.collaborator}](${data.collabGitHub})
    List your collaborators, if any, with links to their GitHub profiles.
    If you used any third-party assets that require attribution, 
    list the creators with links to their primary web presence in this section.
    If you followed tutorials, include links to those here as well.
    
    ## Tests
    ${data.tests}
    Go the extra mile and write tests for your application. 
    Then provide examples on how to run them here.
    
    ## License
    #MIT License

    Copyright (c) ${data.date} ${data.name}

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

    ## Questions
    For any inquiries or questions about **${data.title}**, please contact:
    Email: ${data.email}
    GitHub: (${data.gitHubUser})[${data.gitHubLink}]
  `;
}

module.exports = {generateMarkdown};
