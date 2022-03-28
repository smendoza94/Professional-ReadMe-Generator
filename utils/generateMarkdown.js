// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return '![License Badge](https://img.shields.io/static/v1?label=License&message=MIT&color=success)';
  } else if (license === 'Apache License 2.0') {
    return '![License Badge](https://img.shields.io/static/v1?label=License&message=Apache&color=success)';
  } else if (license === 'GNU General Public License v3.0') {
    return '![License Badge](https://img.shields.io/static/v1?label=License&message=GNU&color=success)';
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return 'https://choosealicense.com/licenses/mit/';
  } else if (license === 'Apache License 2.0') {
    return 'https://choosealicense.com/licenses/apache-2.0/';
  } else if (license === 'GNU General Public License v3.0') {
    return 'https://choosealicense.com/licenses/gpl-3.0/';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    `## License
      [${license}](${renderLicenseLink(license)});
    `
  }
}

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
  @${data.collaborator}
  
  ## Tests
  ${data.tests}
  
  ${renderLicenseSection(data.license)}

  ## Questions
  For any inquiries or questions about **${data.title}**, please contact:
  Email: ${data.email}
  GitHub: (${data.gitHubUser})[https://github.com/${data.gitHubUser}]
  `;
}

module.exports = generateMarkdown;
