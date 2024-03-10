// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Import the Employee class
const Employee = require('./Employee');

// Define and export the Intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        // Call the base class for (Employee)
        super(name, id, email);
        this.school = school; //additional 
    }

    // Override the getRole method
    getRole() {
        return 'Intern';
    }

    // Additional method to get the intern's school
    getSchool() {
        return this.school;
    }
}

// Export the Intern class
module.exports = Intern;
