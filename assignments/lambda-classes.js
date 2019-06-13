// CODE here for your Lambda Classes
class Person {
    constructor(personclass) {
        this.name = personclass.name;
        this.age = personclass.age;
        this.location = personclass.location;
    }
    speak () {
        console.log (`Hello my name is ${this.name}, I am from ${this.location}.`)
    };
}

class Instructor extends Person {
    constructor(instructorclass) {
        super(instructorclass);
        this.specialty = instructorclass.specialty;
        this.favLanguage = instructorclass.favLanguage;
        this.catchPhrase = instructorclass.catchPhrase;
    }
    demo () {
        console.log (`Today we are learning about ${subject}`)
    };
    grade () {
        console.log (`${student.name} recieves a perfect score on ${this.subject}.`)
    };
}
class Student extends Person {
    constructor(studentclass) {
        super(studentclass);
        this.previousBackground = studentclass.previousBackground;
        this.className = studentclass.className;
        this.favSubjects = studentclass.favSubjects;

    }
    listsSubjects () {
        console.log (`Here are my fav subjects: ${this.favSubjects}.`)
    };
    PRAssignment () {
        console.log (`${this.name} has submitted a PR for ${this.subject}.`)
    };
    sprintChallenge () {
        console.log ( `${this.name} has begun sprint challenge on ${this.subject}.`)
    };
}

class ProjectManager extends Instructor {
    constructor(projectmanagerclass) {
        super(projectmanagerclass);
        this.gradClassname = projectmanagerclass.gradClassname;
        this.favInstructor = projectmanagerclass.favInstructor;
    }
    standUp () {
        console.log (`${this.name} announces to ${this.channel}, @channel standy times!`)
    };
    debugsCode () {
        console.log (`${this.name} debugs ${this.student.name}'s code on ${this.subject}.`)
    };
}

const Fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'Javascript',
    specialty: 'Front End',
    catchPhrase: 'Dont forget the homies',
    subject: 'Cats',

});

const Billy = new Student ({
    name: 'Billy',
    location: 'Kokomo',
    age: '25',
    favLanguage: 'Pokemon',
    specialty: 'Eating',
    catchPhrase: 'Cowabunga Dudes',
    favSubjects: 'Cats, sushi, pizza',
    previousBackground: 'Guitarist',
    
});

console.log(Fred.speak);
console.log(Billy.PRAssignment);
