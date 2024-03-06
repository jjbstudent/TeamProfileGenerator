const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./src/page-template');
const fs = require('fs');

const team = [];

async function gatherTeamInformation() {
    // Prompt for manager input
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
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    team.push(manager); // stores information as manager 

    // Prompt for engineer input
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
    const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
    team.push(engineer); // stores information as engineer

    // Prompt for intern input
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
    const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
    team.push(intern); // stores details as Intern
}

//funttion to run the program 
async function run() {
    try {
        await gatherTeamInformation(); // call to prompt for the questions 

        // Generates HTML using the render function
        const teamHTML = render(team);

        // Optionally write the HTML to a file
        fs.writeFileSync('team.html', teamHTML, 'utf-8');

        // Display the generated HTML
        console.log(teamHTML);
        
        console.log('Team information successfully generated.');

    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Run the program
run();
