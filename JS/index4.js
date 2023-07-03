/* 함수 선언문
 function 함수 이름(매개변수){
    함수 내용;
 }
 함수이름은 camelCase를 이용!
*/
// 함수 선언문
helloWorld1();
console.log("----");
function helloWorld1(){
    console.log("hello world1");
}

helloWorld1();

function helloWorld2(){
    return "hello world2";
}
/*
- 함수의 반환값, 함수 내부 코드의 '반환값', helloWorld2()는 hello world2의 문자열을 갖고 있다. 
*/
console.log(helloWorld2());

function add(num1, num2){
    console.log(num1 + num2);
}
function add2(num1, num2){
    console.log("여기만 실행됩니다.");
    return num1 + num2;
    console.log("여기는 실행되지 않아요");
}
add(5, 10);
add2(3, 2);
// helloWorld3();
// 함수 표현식은 선언 이후에 호출해주어야 합니다!

const helloWorld3 = function(){
    console.log("helloWorld3");
};
helloWorld3();
 
// 화살표함수 == 함수표현식
// console.log(helloWorld4());
const helloWorld4 =() => {
    return "hello world 4!!"
};
console.log(helloWorld4());

/* 매개변수가 있는 함수 */
function sayHello1(name){
    return "안녕하세요 " + name + "님";
};
console.log(sayHello1("예은"));

function sayHello2(text, name){
    console.log(`${text}!! ${name}님`);
}
let 안녕 = "안녕하세요";
sayHello2(안녕, "allie");


const sayHello5 = (text, name) => {
    console.log(`${text}!! ${name}님`);
}
sayHello5(안녕, "예은");

// ======실습======
function multifly(a, b){
    return a * b;
}
console.log(multifly(3,7));
console.log(multifly(2,2));

function square(a){
    console.log(a**2);
}
square(4);
square(11);
square(5);
