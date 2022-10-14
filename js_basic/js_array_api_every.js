'use strict';

import {numbers, students, fruits} from './data.js';

console.log('숫자에 모두 8 이하인가요? ',
    numbers.every((number) =>  number < 8 )
);

console.log('숫자에 모두 6 이하인가요? ',
    numbers.every((number) =>  number < 6 )
);

console.log('학생들의 수학점수가 모두 80점 이하인가? ',
    students.every((student) =>  student.mathematics > 70 )
);
