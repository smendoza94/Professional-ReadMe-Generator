// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return '![License Badge](https://img.shields.io/static/v1?label=License&message=MIT&color=success)'
  } else if (license === 'Apache License 2.0') {
    return '![License Badge](https://img.shields.io/static/v1?label=License&message=Apache&color=success)'
  } else if (license === 'GNU General Public License v3.0') {
    return '![License Badge](https://img.shields.io/static/v1?label=License&message=GNU&color=success)'
  }
} 

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
    ${renderLicenseBadge(data.license)}

    ## Description 
    ${data.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    ![Usage Image](${data.usageImg})
    
    ## Contributing
    [${data.collaborator}](https://github.com/${data.collaborator})
    
    ## Tests
    ${data.tests}
    
    ## License
    ${data.license}
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
    GitHub: (${data.gitHubUser})[https://github.com/${data.gitHubUser}]
  `;
}

module.exports = {generateMarkdown};
