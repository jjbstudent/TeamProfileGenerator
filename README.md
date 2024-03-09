# Team Profile Generator

## Description
This Node.js command-line application generates an HTML webpage displaying summaries for a software engineering team. It accepts user input to gather information about team members, including the team manager, engineers, and interns. The application utilizes classes for each team member, and all tests must pass using Jest. The generated HTML is based on user input and is written to a file named `team.html` in the `output` folder.

## User Story
As a manager, I want to generate a webpage that displays my team's basic info so that I have quick access to their emails and GitHub profiles.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)

## Installation
To install the necessary dependencies, run the following command:

```bash
npm install inquirer@6.5.0

npm install jest

```
## Usage
Run the application using the following command:
```bash
node index.js
```
1. Enter information about the team manager, engineers, and interns as prompted.
2. Choose to add an Engineer, an Intern, or finish building the team.
3. Once finished, the application generates an HTML file (team.html) in the output folder.

## Tests
```bash
npm run test
```

## Contributing
reference links
- https://www.npmjs.com/package//inquirer
- https://jestjs.io/docs/getting-started
- https://react.dev/learn


## License 
Uses MIT Licence 


