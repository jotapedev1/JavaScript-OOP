import User from "./User.js";

export default class Admin extends User {
    constructor (name, email, birthday, role="admin", active=true) {
        super(name, email, birthday, role, active);
    }
    createCourse(courseName, coursePlace) {
        console.log(`Curso criado: ${courseName} - ${coursePlace} vagas`);
    }   
}