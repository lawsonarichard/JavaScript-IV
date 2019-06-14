// CODE here for your Lambda Classes
class Person {
    constructor(personclass) {
        this.name = personclass.name;
        this.age = personclass.age;
        this.location = personclass.location;
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    };
}

class Instructor extends Person {
    constructor(instructorclass) {
        super(instructorclass);
        this.specialty = instructorclass.specialty;
        this.favLanguage = instructorclass.favLanguage;
        this.catchPhrase = instructorclass.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}`
    };
    grade (student, subject) {
        return `${student.name} recieves a perfect score on ${subject}.`
    };
}
class Student extends Person {
    constructor(studentclass) {
        super(studentclass);
        this.previousBackground = studentclass.previousBackground;
        this.className = studentclass.className;
        this.favSubjects = studentclass.favSubjects;
        this.grade = function getRandom (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max-min + 1)) + min;
        };
    }
    listsSubjects () {
        return `Here are my fav subjects: ${this.favSubjects}.`
    };
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    };
    sprintChallenge (student, subject) {
        return `${student.name} has begun sprint challenge on ${this.subject}.`
    };
}

class ProjectManager extends Instructor {
    constructor(projectmanagerclass) {
        super(projectmanagerclass);
        this.gradClassname = projectmanagerclass.gradClassname;
        this.favInstructor = projectmanagerclass.favInstructor;
    }
    standUp (name, channel) {
        return `${this.name} announces to ${this.channel}, @channel standy times!`
    };
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
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

const George = new ProjectManager ({
    gradClassname: 'CS1',
    favInstructor: 'Sean',
    name: 'George',
});

console.log(Fred.speak());
console.log(Billy.PRAssignment('bouncy ball'));
console.log(George.gradClassname);
console.log(George.debugsCode(Billy, 'cats'))