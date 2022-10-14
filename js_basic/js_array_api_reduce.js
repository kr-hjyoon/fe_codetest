'use strict';

import {numbers, students, fruits} from './data.js';

// // 누적값, 현대값, 인덱스 , 원본 soruce , 두번재 인자가 acc(누적값)의 초기값 
// const result = numbers.reduce( (acc,cur,idx,src)=>{
//     console.log("acc:",acc,"cur:",cur,"idx:",idx);
//     return acc;
// },1);

// console.log("result:", result);

// // 누적값, 현대값, 인덱스 , 원본 soruce , 두번재 인자가 초기값 
// const result1 = numbers.reduce( (acc,cur,idx,src)=>{
//     console.log("acc:",acc,"cur:",cur,"idx:",idx);
//     return acc + cur;
// },1);
// console.log("result:", result1);

// 중복값을 제거 하는 에제 
const result3 = fruits.reduce( (acc,cur)=>{
    if(acc.includes(cur) == false){
        acc.push(cur);
    }
    return acc;
},[]);

console.log(result3);




