function Person (name, isAlive, haircolor){
    this.name = name;
    this.isAlive = isAlive;
    this.haircolor = haircolor;
    this.speak = function(){
        console.log(name)
    }
}

new Person("kyle", true, "brown")
console.log(Person())
// console.log(Person.speak())
