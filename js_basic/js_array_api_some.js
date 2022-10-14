'use strict';

import {numbers, students, fruits} from './data.js';

console.log('과일중에 배가 있나요?',
    fruits.some((fruit, index) => {
        console.log(fruit, index);
        return fruit === "배" ;
    })
);

console.log('숫자에 7이상인 숫자가 있나요?',
    numbers.some((number) =>  number >= 7 )
);

console.log('수학점수가 100점인 학생이 있나요?',
    students.some((student) =>  student.mathematics === 100 )
);


console.log('영어점수가 50점인 미만인 학생이 있나요?',
    students.some((student) =>  student.english < 50 )
);

