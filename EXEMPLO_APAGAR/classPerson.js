//é no constructor que o objeto vai ser inicializado

class Person {

    //Criando variável de objeto
    //static lastId = 0;

    constructor (id, name, age){
        //utilizando a variável de objeto
       // this.id = Person.lastId++;

        this.id = id;
        this.name = name;
        this.age = age;

    }

    example_method(){
        console.log("olá meu nome é ", this.name)

    }
}

//criando um objeto Perosn
let ricardo = new Person(10,"Ricardo", 20)

ricardo.example_method()

//module.exports = Person;
// para importar => const Person = require('./Person')

class Alumn extends Person{

    constructor(id,name, age, turma){
        super(id,name,age)
        this.turma = turma;        
    }

    example_method(){
        console.log("olá meu nome é ", this.name, "e estou na turma", this.turma);

    }
}







//criando um objeto Aluno
let tiago = new Alumn(2,"tiago", 20, "1001");

//console.log(tiago.turma);

tiago.example_method()