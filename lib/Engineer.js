const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, role, github) {

        super(name, id, email, role);
        this.github = github;
    };

    getGithub() {  
        return this.github;
    };

    getRole() {
        return this.role = "Engineer";
    };
}

module.exports = Engineer;