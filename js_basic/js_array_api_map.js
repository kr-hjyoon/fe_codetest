'use strict';

import {numbers, students} from './data.js';

const result = numbers.map( ( number) => number * 2 );
console.log(result);


const result2 = students.map( (student) => student.english);

console.log(result2);

const result3 = students.map( (student) => student.name);

console.log(result3);
