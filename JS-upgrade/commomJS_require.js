const module1 = require("./commonJS_module");
console.log(module1);
console.log(module1.colors);

const soojung = new module1.Person("수정", 20);
console.log(soojung);

const {sayName} = request("./commonJS_module.js");
const {sayName2, sayhi2} = request("./commonJS_module2.js");
sayName("allie");

sayName("진형");
sayhi2();