export default class User{
    #name
    #email
    #birthday
    #role
    #active
    constructor(name, email, birthday, role, active) {
        this.#name = name;
        this.#email = email;
        this.#birthday = birthday;
        this.#role = role || "student";
        this.#active = active || true;
    }
    getUserInfo() {
        console.log(`Name: ${this.#name}, Email: ${this.#email}, Birthday: ${this.#birthday}, Role: ${this.#role}, Active: ${this.#active}`);
    }
    
}

const user1 = new User("João", "j@j", "07/12/2006");
//user1.getUserInfo();

//console.log(user1.isPrototypeOf(User)); // false
//console.log(User.prototype.isPrototypeOf(user1)); // true