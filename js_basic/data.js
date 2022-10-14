export const numbers = [1,2,3,4,5,6,7];


export class Student{
    constructor(name, korean, english, mathematics){
        this.name = name;
        this.korean = korean;
        this.english = english;
        this.mathematics = mathematics;
    }
}

const student1 = new Student('홍길동', 95, 87, 75);
const student2 = new Student('이길동', 67, 80, 100);
const student3 = new Student('김길동', 89, 75,80 );
const student4 = new Student('최길동', 48, 54,898 );

export  const students = [student1,student2,student3,student4];

export const fruits = ["사과", "배","메론", "참와","딸기","수박","메론"];