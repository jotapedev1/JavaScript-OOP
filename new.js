function User(name, email) {
    this.name = name;
    this.email = email;

    this.getUserInfo = function() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

const user1 = new User("João", "j@j.com");
user1.getUserInfo();

function Admin(role){
    User.call(this, "Isabela", "i@i.com");
    this.role = role || "student";
}

Admin.prototype = Object.create(User.prototype);
const admin1 = new Admin("admin");
admin1.getUserInfo();
console.log(admin1.role);

const user2 = {
    init: function(name, email) {
        this.name = name;
        this.email = email;
    },
    showInfo: function() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

const user2 = Object.create(user2);
user2.init("Silmara", "s@s.com");
user2.showInfo();