// Import necessary modules
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./src/page-template');
const fs = require('fs');

// Declare an array to store team members
let team = []; // Team array

// Function to prompt user for manager details
async function promptManager() {
    // Ask user for manager details
    const managerData = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter manager's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager's ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email:",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number:",
        },
    ]);

    // Create a new Manager object and add it to the team array
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    team.push(manager);
}

// Function to prompt user for engineer details
async function promptEngineer() {
    // Ask user for engineer details
    const engineerData = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter engineer's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter engineer's ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter engineer's email:",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter engineer's GitHub username:",
        },
    ]);

    // Create a new Engineer object and add it to the team array
    const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
    team.push(engineer);
}

// Function to prompt user for intern details
async function promptIntern() {
    // Ask user for intern details
    const internData = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter intern's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter intern's ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter intern's email:",
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter intern's school:",
        },
    ]);

    // Create a new Intern object and add it to the team array
    const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
    team.push(intern);
}

// Function to prompt user for the next action
async function promptUserAction() {
    // Ask user what they would like to do next
    const userAction = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team'],
        },
    ]);

    return userAction.action;
}

// Main function to run the program
async function run() {
    try {
        // Prompt user for manager details
        await promptManager();

        let userAction;
        // Continue prompting user until they finish building the team
        do {
            userAction = await promptUserAction();

            // Based on user action, prompt for engineer or intern details
            if (userAction === 'Add an Engineer') {
                await promptEngineer();
            } else if (userAction === 'Add an Intern') {
                await promptIntern();
            }
        } while (userAction !== 'Finish building the team');

        // Generate HTML using the render function
        const teamHTML = render(team);

        // Write HTML to a file and log to console
        fs.writeFileSync('team.html', teamHTML, 'utf-8');
        console.log(teamHTML);
        console.log('Team information successfully generated.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Run the program
run();
