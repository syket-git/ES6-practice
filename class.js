class Student{
    constructor(sId, sName){
        this.id = sId,
        this.name = sName,
        this.institute = "Chittagong Polytechnic Institute"
    }
}

const student1 = new Student(1, "Syket Bhattachergee");
const student2 = new Student(2, "Sakib Khan");
console.log(student1.institute,",", student2.institute);