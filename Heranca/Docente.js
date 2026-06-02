import User from "./User.js";

export default class Docente extends User {
    constructor (name, email, birthday, role="docente", active=true) {
        super(name, email, birthday, role, active);
    }
    approveStudent(studentName, courseName) {
        console.log(`Alune aprovade: ${studentName} no curse: ${courseName}`);
    }
}

