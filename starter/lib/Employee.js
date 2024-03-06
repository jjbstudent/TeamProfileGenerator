// TODO: Write code to define and export the Employee class

// Define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Methods to get specific details of employee
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee'; // Default role for the base class
    }
}

// Export the Employee class
module.exports = Employee;
