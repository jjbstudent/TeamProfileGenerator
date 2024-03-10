// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Import the Employee class
const Employee = require('./Employee');

// Define and export the Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
         // Call the base class for (Employee)
        super(name, id, email);
        this.github = github;  //additional 
    }

    // Override the getRole method
    getRole() {
        return 'Engineer';
    }

    // Additional method to get the engineer's GitHub username
    getGithub() {
        return this.github;
    }
}

// Export the Engineer class
module.exports = Engineer;
