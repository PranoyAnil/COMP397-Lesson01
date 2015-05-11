class Person {
    constructor() { }
    //public
    public saysHello() {
        console.log("Says Hello");
    }
} 

function init() {
    var myPerson = new Person();
    myPerson.saysHello();
}

