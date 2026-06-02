const User = {
    name: "João",
    age: 30,
    email: "joao@emil.com",
    getUserInfo: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
    }
}

const userInfo = function(){
    console.log(this.name);
}
const showName = User.getUserInfo.bind(User);

userInfo(); // undefined
showName();