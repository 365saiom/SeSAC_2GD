// 오브젝트를 생성
/* 
   속성
       만들어진 연도 year
       집의 이름 name
       창문의 갯수 window
   함수
       만들어진 연도를 콘솔창에 출력하는 "건물의 나이"
       창문의 갯수를 콘솔창에 출력하는 함수 
*/

class House{
    constructor(year, name, window){
        this.name = name
        this.year = year
        this.window = window;
    }

    getAge(){
        console.log(`${this.name}는 건축한지 ${2023 - this.year}년 지났어요`);
    }

    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다`);
    }
}

const house1 = new House(1789, "old", 1);
console.log(house1);
house1.getAge();
house1.getWindow();

const house2 = new House(2022, "자이", 10);
house2.getAge();
house2.getWindow();
console.log(house2.name);

console.log("----상속----");

/* 
추가할 속성
   층수 floor
   창문 제조업체 windowMaker
추가할 함수
   aptInfo() 아파트 정보를 나타내는 메소드
*/
class Apartment extends House{
    constructor(year, name, window, floor, windowMaker){
        super(year, name, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }

    getAptInfo(){
        return `${this.year}에 지어진 ${this.name}. 총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
    }

    getWindow(){
        return `${this.name} 아파트의 ${this.window}개의 창문은 ${this.windowMaker}에서 만들었습니다.`;
    }
}

const apt1 = new Apartment(2020, "raemian", 6, 19, "KCC");
console.log(apt1);
console.log(apt1.getAptInfo);
apt1.getAge();
// apt1.getWindow();
console.log(apt1.getWindow());


class Shape{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        this.area = this.width * this.height;
        return `직사각형의 넓이는 ${this.area} 입니다.`;
    }
}

const rectangle1 = new Shape(3,4);
console.log(rectangle1.getArea()); 

// Rectangle 클래스
class Rectangle extends Shape{
    // 속성 추가를 하지 않는다면 constructor로 정의하지 않아도 된다. 

    getDiagonal(){
        this.line = Math.sqrt(this.width ** 2) + (this.height ** 2);
        return `직사각형의 대각선 길이는 ${this.line} 입니다.`;
    }
}

const rectangle2 = new Rectangle(6,8);
console.log(rectangle2.getDiagonal()); 

class Triangle extends Shape{

    //overriding
    getArea(){
        return (this.width * this.height) / 2;
    }
}

const triangle1 = new Triangle(3,4);
console.log(triangle1.getArea()); 

class Circle extends Shape{
    constructor(width, height, radius){
        super(width, height);
        this.radius = radius;
    }
    //overriding
    getArea(){
        return this.radius ** 2 * Math.PI;
    }
}

const circle1 = new Circle(3, 4, 5);
console.log(circle1.getArea()); 
