'use strict';

import {numbers, students, fruits} from './data.js';



console.log('짝수만 출력해주세요 ',
    numbers.filter((number) =>  (number % 2)=== 0  )
);
console.log('홀수만 출력해주세요 ',
    numbers.filter((number) =>  (number % 2)=== 1  )
);


console.log('학생들의 영어점수가 70점 이상인 학생만  ',
    students.filter((student) =>  student.english >= 70  )
);

