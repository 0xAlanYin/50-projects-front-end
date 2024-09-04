
// console 演示
console.log("hello".length);
console.log("hello".charAt(0));
console.log("hello".replace("hello", "hi"));
console.log("hello".toUpperCase());


// 变量演示
var name = "Alan";
console.log("name:", name);
name = "Yin"
console.log("name:", name);

let age = 29;
console.log("age:", age)

// 常量演示
const PI = Math.PI;
console.log("PI:", PI)
// PI = 3.14; //Uncaught TypeError: Assignment to constant variable.


// 运算符演示
var x = 2;
console.log("x+3=", x + 3)

x = 1 + 2 + "3"
console.log("x=", x)

x = "1" + 2 + 3
console.log("x=", x)

console.log("123 == \"123\"", 123 == "123") // true (有类型自动转换)
console.log("123 === \"123\"", 123 === "123") // false

console.log("1 == true", 1 == true) // true
console.log("1 === true", 1 === true) // false


// 分支演示
var name = "Bob"

if (name == "Bob") {
    console.log("Bob here");
} else if (name == "Alice") {
    console.log("Alice here");
} else {
    console.log("Unkown");
}


switch (name) {
    case "Bob":
        console.log("Bob here");
        break;
    case "Alice":
        console.log("Alice here");
        break;
    default:
        console.log("Unkown");
}


// 循环演示
while (false) {
    console.log("while")
}


var a = 10;
do {
    a++;
    console.log("a:", a)
} while (a < 15)


var b = 1;
for (let i = 0; i < 10; i++) {
    b++;
}
console.log("b=", b)

// 三元操作符
var allowed = (b > 10) ? "Y" : "N"
console.log("allowed=", allowed)


var obj1 = new Object();
var obj2 = {};

obj1 = {
    name: "Alan",
    age: 20,
    emial: "xx@gmail.com",
    contact: {
        phone: 1234,
        telegram: "xxxx"
    }
}

console.log("obj1:", obj1)
console.log("obj1.name:", obj1.name)
console.log("obj1.contact.phone:", obj1.contact.phone)
console.log("obj1 contact phone:", obj1["contact"]["phone"])

obj1.name = "Bob" // 更改值
console.log("obj1.name:", obj1.name)

obj1.contact.wechat = "xxxa"
console.log("obj1.contact:", obj1.contact)

// 数组
var c = new Array();
var d = [];

c[0] = "a";
c[4] = "b"
console.log("c:", c)
console.log("c[1]:", c[1]) // undefined
console.log("c.length:", c.length)

for (let i = 0; i < c.length; i++) {
    console.log("c[" + i + "] = ", c[i])
}

//  会跳过 undefined 的元素
for (let i in c) {
    console.log("one element in c:" + c[i])
}

c.forEach(element => {
    console.log("element in c:" + element)
});


d.push("aa");
d.push("bb");
d.push("cc");
console.log("d:", d);

d.pop();
console.log("d:", d);

d.reverse();
console.log("d:", d);


// 函数
let f = 1;
function add(x) {
    f += x;
}

add(2);
console.log("f:", f)

function sum(array) {
    let sum = 0;
    // for (let i = 0; i < array.length; i++) {
    //     sum += array[i];
    // }
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

let reuslt = sum([1, 2, 3, 4]);
console.log("sum=", reuslt);


// 闭包
function makeAdder(a) {
    return function (b) {
        return a + b;
    }
}

var x = makeAdder(3)
var sum = x(4);
console.log("makeAdder:", sum)