// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Import the Employee class
const Employee = require('./Employee');

// Define and export the Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Call the base class (Employee)
        super(name, id, email);
        this.officeNumber = officeNumber; // additional property for Manager
    }

    // Override the getRole method
    getRole() {
        return 'Manager';
    }

    // Additional method to get the manager's office number
    getOfficeNumber() {
        return this.officeNumber;
    }
}

// Export the Manager class
module.exports = Manager;
