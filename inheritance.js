class School{
    constructor(){
        this.school = "A.K. HIGH SCHOOL"
    }
}

class Student extends School{
    constructor(sName){
        super();
        this.name = sName
    }
    fullDetails(){
        return 'we are student of ' + this.school
    }
    
}

const student1 = new Student('John');
const student2 = new Student('Rafsan');

console.log(student1.fullDetails(), student2)