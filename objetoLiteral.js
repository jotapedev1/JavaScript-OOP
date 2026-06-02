const User = {
    name: "João",
    email: "joao@email.com",
    bithday: "12/12/2006",
    role: "student",
    active: true,
    getUserInfo: function() {
        console.log(`Name: ${this.name}, Email: ${this.email}, Birthday: ${this.bithday}, Role: ${this.role}, Active: ${this.active}`);
    }
}

const admin = {
    name: "Isabela",
    email: "isabela@email.com",
    role: "admin",
    createCourse: function() {
        console.log("Curso criado.");
    }
}

Object.setPrototypeOf(admin, User); //admin herda as propriedades e métodos do User
admin.createCourse(); // Curso criado.
admin.getUserInfo(); 