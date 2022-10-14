# 관련 자료 
## Gym 코딩 FE과정 입문 교안 
  * https://www.gymcoding.co/acf439e5e4b04e079104439153a7f223


  * https://gymcoding.notion.site/acf439e5e4b04e079104439153a7f223


## Module 강의 
  * https://www.youtube.com/watch?v=5NXEXkIrkAk

## 미디어 쿼리 강의 
  * https://www.youtube.com/watch?v=97X4HVBGn8g


# DOM관련 

## Dom 조회 메서드 
  * getElementById()
  * getElementsByTagName()
  * querySelector()  
  * querySelectorAll()
  * DOM 요소 조작

## 변수 / 상수 
  * var 
  * let 
    * ES6에서 도입 
    * 블록 명령문이나 let 을 사용한 표현식 내로 범위가 제한
  * const 
    * ES6에서 도입 
    * 상수 , immutable 

  * 성능에서 이점을 얻기위해 let 보다 const를 사용하면 좋습니다.
  *  값이 바뀔 수 있는 경우에는 let을 사용, var 사용지양 

## 호이스팅 (hoisting)
  * 호이스팅은 코드가 실행되기전 변수나 함수의 선언이 자바스크립트 파일의 최상단으로 끌어 올려지는 것을 말한다.
  * var 로 선언한 수 / function 으로 선언된 함수를 호이스팅 발생
  * let const class 를 이용한 선언은 호이스팅이 발생하지 않는다

## Strict Mode
  * ES5 문법에서는 암시적 전역 변수(implict global)라는 것이 생길 수 있었습니다. 암시적 전역 변수는 여러 가지 골치아픈 에러를 일으키곤 하는데요. 간단히 말해 var로 선언하는 것을 잊으면 자바스크립트는 전역 변수를 참조하려 한다고 간주하고, 그런 전역 변수가 존재하지 않으면 스스로 만들었습니다.
  * Strict Mode는 암시적 전역 변수와 묵인 했던 여러가지 이상한 문법을 허용하지 않습니다.
  ```jsx
  'use strict'; // 또는 "use strict"
  number = 1;   // number is not defined
  ```

## 기본타입  (Primitive type)
  * 숫자 (number)
    * let number1 = 12;        // number type
    * const number2 = 1.2;     // number type
    * 숫자의 특별한 값
      * Infinity - 양수를 0으로 나누는 경우
      * -Infinity - 음수를 0으로 나눈는 경우
      * NaN - 숫자가 아닌 값을 나누는 경우 
  * 문자열 (string)
     ```jsx
    const name1 = '홍길동';     // 싱글쿼터 표현
    const name2 = "한길동";      // 더블쿼터 표현
    const name3 = `김길동`;    // 백틱 표현 , ES6에서 도입됨 
    console.log('이름 ' + name + '  나이 ' + age + '살');
    console.log(`이름 ${name} 나이 ${age}살`);  // ES6
    // 백틱으로 여러줄 표헌 
    const html = `
	  <div>
		  <span>Hello World!</span>
	  </div>
    `;

    ```
  * 불리언 (boolean)
  * null  
    * 비어있는값 - 값이 없는 상태
      * let message = null; // 값이 빈 상태를 의도적으로 표현
  * undefined
    * 비어있는값 = 값이 할당 되지 않은 상태 
      * let message; // 값을 할당하지 않은 상태
  
  * 심볼 (symbol) 
    * 유일한 토큰을 나타내기 위해 ES6에서 도입
    ```jsx
     const TOM_JOB = Symbol('My Job is Programer');
     const KIM_JOB = Symbol('My Job is Programer');
     console.log(TOM_JOB === KIM_JOB); // false: 심볼은 모두 서로 다름  
     // 출력시
     console.log(KIM_JOB.description)
    ```
## 객체타입 (Object type)
  * Array
  * Date
  * Math
  * Object
  * 이외의 프리미티브 타입을제외한 모든것이 객체 

## 배열복사시 
  ```jsx
  const fruits = ['오렌지', '포도', '사과', '바나나', '딸기'];
  const copy = fruits ; // 참조 복사 
  const copy = Array.from(fruits); // 값 복사 
  const copy = [...fruits]; // 값 복사 
  const copy = fruits.slice(); // 값 복사 
  ```

## 배열관련 주요 키워드 / method
  ```jsx
const arr = [1,2,3];
arr.lenth  // 길이 3 
arr.push(4) ;  // 배열끝에 항목추가 
arr.pop(); // 마지막 항목 꺼내기 
arr.shift(); // 왼쪽으로 이동   [1,2,3] > [2,3]
arr.unshift(0); // 오른쪽으로 이동, 맨앞에 항목추가    [0,1,2,3]
arr.indexOf(2); // 값 1리턴  항목 찾기 
arr.splice(2,1)  // 2번인덱스에서 1개 제거 [1,2,3,4] > [1,2,4]  
```

## typeof
  * typeof 연산자는 피연산자의 데이터 타입을 문자열로 반환 합니다.
  ```jsx
  console.log(typeof 42);  //  "number"
  console.log(typeof 'blubber');  // "string"
  console.log(typeof true);  // "boolean"
  console.log(typeof undeclaredVariable);  // "undefined"
  ```


## 배열 구조분해 할당 - 개별변수로 할당 
  ```jsx
  const fruits = ['사과', '바나나', '딸기'];
  const [apple, banana, strawberry]  = fruits;
  ```

## 전개 구문 - spread syntax 
  ```jsx
  let arr = [1, 'two', 3, 'four'];
  let numberArr = [...arr, 5, 'six'];  // ...를 이용하여  array 전개 
  // numberArr:  (6) [1, 'two', 3, 'four', 5, 'six']

  ## Rest parameters  - 가변인자 
  function printFruits(...fruits) {
    console.log('fruits: ', fruits);
  }
  ```



## for ... in 
  * 객체(object)에 있는 키 항목들을 반복적으로 반환합니다. ES6 에서 추가됨.
  ```jsx
  const person = {
	  name: '홍길동',
	  age: 20,
	  job: '개발자'
  };
  for (let key in person) {
	  console.log(`key: ${key}, value: ${person[key]}`);
  }
  // [출력]
  // key: name, value: 홍길동
  // key: age, value: 20
  // key: job, value: 개발자
  ```

## for ... of
  * 반복 가능한 배열과 같은 객체에서 반복해서 값을 하나씩 반환한다. ES6 에서 추가됨.
  ```jsx
  const array = ['a', 'b', 'c', 'd', 'e'];
  for (let value of array) {
	  console.log('value: ', value);
  }
  // [출력]
  // value:  a
  // value:  b
  // value:  c
  // value:  d
  // value:  e
  ```

## this
  * 호출자가 this 
  * 호출자가 없을 경우 default가 window
  * 예외 
    * 전역스코프에서 this는 window 객체 입니다.
    * 화살표 함수(Arrow Function)에서 this가 조금 달라집니다.
      * 외부 Scope에서 this를 계승
      * 화살표 함수에서 this는 자신을 감싼 정적 범위임
    * Strict Mode에서는 this가 조금 달라집니다
      * 호출자가 없을 경우 기본값을 window로 하지 않고 undefined로 함. 
  * bind를 통해 this를 설정 (필요시 별도 학습)


## 함수 선언식 , 함수 표현식
  * 두 가지의 차이
    * 함수 선언식은 호이스팅의 영향을 받음.
    * 함수 표현식은 호이스팅의 영향을 받지 않음.


## 함수스콥관련 (타언어와 다른점)
  * 자식은 부모의 것을 사용할 수 있다.
  


## 즉시실행함수
  * () 를 사용하여 즉시 실행하는 함수를 만들 수 있습니다.
  ```jsx
  (function() {
    console.log('hello')
  })()
  (function hello() {
    console.log('hello')
  })()
  ```

## 파라미터 기본값
  ```jsx
  // ES 6부터 기본값 지정 가능 
   function sum(number1 = 0, number2 = 0) { 
      // ..
   }
 ```

## Arrow Function 
  ```jsx
    const f1 = function() { return "hello"; }
    // 또는
    const f1 = () => "hello";

    const f2 = function(name) { return `Hello, ${name}`; }
    // 또는
    const f2 = name => `Hello, ${name}`;

    const f3 = function(a, b) { return a + b; }
    // 또는
    const f3 = (a, b) => a + b;
  ```

## Object
  * 객체의 표현은 {}
  * key와 value로 구성
  ```jsx  
    const obj = {
      name: '코딩공부',    // name 프로퍼티
      age: 20,         // age 프로퍼티
      sayHello: function() {   // sayHello 메서드
        console.log('Hello!');
      },
      sayHi() {  // 이렇게도 선언할 수 있다.
        console.log('Hi!');
      }
    };
  ```
  * 다른객체를 프로퍼티로 가질수 있음


## 객체  생성방법
  * 리터럴 방식 {} 사용 
    ```jsx
    const obj = {};
    obj.name = '코딩공부';
    obj.age = '코딩공부';
    ```
  * 객체 생성자 문접
    ```jsx
    const obj = new Object();
    obj.name = '코딩공부';
    obj.age = 20;
    ```

## 객체 프로퍼트 접근
  * 점표기법 - 예) 객체.key
    * person.name
    * person.age
  * 괄호 표기법 - 예) 객체['key']
    * person['name']
    * person['age'] 
  
## 객체 프로퍼티 제거
  * delete 연산자는 객체 프로퍼티를 제거합니다.
  ```jsx
  const person = {};
  person.name = '코딩공부';
  person.age = 20;
  delete person.name;
  ```
## 객체 구조분해 할당 
  ```jsx
  const person = {
    name: '코딩공부',
    age: 10,
    hobby: '헬스'
  };
  const { name, age, hobby } = person;
  ```

## ES6 단축 속성명
  * 객체에서 key와 value가 동일할 때는 Property shorthand(단축 속성명)을 사용가능
  * 단축 속성명은 객체를 정의 할 때 key값과 value값이 같으면 key와 value를 각각 표기하지 않고 한번만 표기하는 것
  ```jsx
  function createPerson(name, age, hobby) {
    return {
      name,
      age,
      hobby
	  };
  };
  ```


## 함수 클래스를 사용한 객체 생성 (ES5)
  ```jsx
  function Person(name, age, hobby) {
	  this.name = name;
	  this.age = age;
	  this.hobby = hobby;
  }
  const person = new Person('코딩공부', 20, '헬스');
  console.log(person)
  ```

## 클래스를 사용한 객체 생성 (ES6)
  ```jsx
  class Person {
    constructor(name, age, hobby) {
      this.name = name;
      this.age = age;
      this.hobby = hobby;
    }
  }
  const person = new Person('코딩공부', 20, '헬스');
  ```


## 스크립트 로드 
  * 스크립트가 html dom이 생성되기전에 실행될때 이슈 발생 
  * 해결방법
    * body 최 하단에서 스크립트 로드 
    * load 이벤트 리스너 등록
      ```jsx
      window.onload = function () { };
      ```
    * DOM 생성후 이벤트 등록 
      ```jsx
      document.addEventListener('DOMContentLoaded', function () {
      ```
##  HTML5 script 로드 해결방법
  * HTML5에서는 defer async 속성을 통해 비동기 로드 가능
    * defer 속성 - HTML 파싱과 함께, 비동기로 JavaScript 파일을 불러온다.
      * HTML 파싱이 완료된 후, JavaScript 코드를 실행한다.
      ```jsx
      <script src="script.js" defer></script>
      ```
    * async 속성 - HTML 파싱과 함께, 비동기로 JavaScript 파일을 불러온다.
      * HTML파싱이 완료되지 않았더라도, 먼저 로딩되는 JavaScript파일부터 실행이 시작된다.
      * JavaScript 파일을 실행할 때는 HTML 파싱이 중단된다.
      ```jsx
      <script src="script.js" async></script>
      ```

# Brower 객체
  * window - 모든 객체가 소속된 객체이며, 브라우저 창을 의미한다.
  * document - 현재문서에 대한 정보를 갖고 있는 객체입니다.
  * history - 현재의 브라우저가 접근했던 URL history를 제어할 수 있습니다.
  * location - 문서의 주소와 관련된 객체로 window 객체의 프로퍼티인 동시에 document의 프로퍼티 입니다.
    * 이 객체를 이용하여 윈도우의 문서 URL을 변경할 수 있고, 문서의 위치와 관련해서 다양한 정보를 얻을 수 있음
  * screen - 사용자의 디스플레이 화면에 대한 다양한 정보를 갖고있는 객체입니다.
  * navigator - 실행중인 애플리케이션(브라우저)에 대한 정보를 알 수 있다. 
    * 크로스 브라우징 이슈를 해결할 때 사용할 수 있다. (예: Chrome → addEventListener, IE → attachEvent)


# JS 모듈 시스템 
  * `ES6(ES2015)`에 도입된 자바스크립트 모듈 시스템
  * `<script>` 태그에 `type="module"` 속성을 추가해주면, 이 파일은 모듈로서 동작
   ```jsx
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <title>ES Modules</title>
       <script type="module" src="module/index.js"></script>
     </head>
    <body></body>
   </html>
   ```
   * 모듈을 외부에서 사용할 수 있도록 내보낼 때는 `named export`,
   * `default export`와 같은 키워드를 사용하며, 외부에서 모듈을 불러올 때는 `import`를 사용하여 불러옴
   
# 모듈 방식 
  * `AMD` - 가장 오래된 모듈 시스템 중 하나로 require.js라는 라이브러리를 통해 처음 개발되었습니다.
  * `CommonJS` - NodeJS 환경을 위해 만들어진 모듈 시스템 입니다.
  * `UMD` - AMD와 CommonJS와 같은 다양한 모듈 시스템을 함께 사용하기 위해 만들어졌습니다.
  * `ES Module` - `ES6(ES2015)`에 도입된 자바스크립트 모듈 시스템 입니다

## named export 를 사용하여 함수 또는 변수를 내보낼 수 있습니다.
  ```jsx
  // module/math.js
  export const perfectScore = 100;
  export const sum = (num1, num2) => {
    return num1 + num2;
  };
  export const avg = function (score1, score2) {
    return (score1 + score2) / 2;
  };
  ```
## default export를 사용하여 하나 기본 함수를 내보낼 수 있습니다. 단, 모듈 당 하나만 가능
  ```jsx
  // module/math.js
  export const perfectScore = 100;

  export const sum = (num1, num2) => {
     return num1 + num2;
  };

  export const avg = function (score1, score2) {
     return (score1 + score2) / 2;
  };

  const subtract = function (num1, num2) {
    return num1 - num2;
  };
  export default subtract;
  ```

## import 
  * `export를 import를` 통해 가져오기 
    ```jsx
    // index.js
    import { perfectScore, sum, avg } from './math.js';
    console.log('만점: ', perfectScore);
    console.log('합: ', sum(80, 10));
    console.log('평균: ', avg(80, 90));
    ```
  * `* as` 별칭을 통해 가져오기
    ```jsx
    // index.js   
    import * as math from './math.js';
    console.log('만점: ', math.perfectScore);  // math.프로퍼티로 접금 
    console.log('합: ', math.sum(80, 10));
    console.log('평균: ', math.avg(80, 90));
    ```

## ` export default`를 import 하는 경우 
    ```jsx
    // index.js
    import subtract from './math.js';  // default 하나만 임포트함 
    console.log('빼기: ', subtract(100, 45));
    ```







