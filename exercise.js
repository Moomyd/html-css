//第二章
//三角形
for(let x="#";x.length<8;x+="#")
   console.log(x);
//FIZZBUZZ
for(let x=1;x<=100;x++)
{
    if(x%3==0&&x%5!=0)
       console.log("Fizz");
    else if(x%5==0&&x%3!=0)
       console.log("Buzz");
    else if(x%5==0&&x%3==0)
       console.log("FizzBuzz");
    else 
       console.log(x);
}
//棋盘
let size=8;
let x="";
for(let i=0;i<size;i++){
    for(let j=0;j<size;j++)
    {
        if((i+j)%2==0)
            x+=" ";
        else
            x+="#";
    }
    x+="\n";
}
console.log(x);
//第三章
//最低要求
function min(x,y){
    if(x<y) return x;
    else return y;
}
console.log(min(0,10));
console.log(min(0,-10));
//递归
function isEven(x){
    if(x==0) return true;
    else if(x==1) return false;
    else if(x<0) return isEven(-x);
    else return isEven(x-2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

//bean counting
function countChar(string,n){
    let count=0;
    for(let i=0;i<string.length;i++){
        if(string[i]==n){
            count+=1;
        }
    }
    return count;
}
function countBs(string){
    return countChar(string,"B");
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
//第四章
//范围的总和
function range(start,end,step){
    step=start<end?1:-1;
    let array = [];

    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
  }
  
  function sum(array) {
    let total = 0;
    for (let value of array) {
      total += value;
    }
    return total;
  }
  
  console.log(range(1, 10))
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55

  //反转数组
  function reverseArray(array){
      let x=[];
      for(let i=array.length-1;i>=0;i++){
          x.push(array[i]);
      }
      return x;
  }
  function reverseArrayInPlace(array){
       for (let i = 0; i < Math.floor(array.length / 2); i++) {//Math.floor(x) 一个表示小于或等于指定数字的最大整数的数字。
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

//一个列表
function arrayToList(array){
    let list=null;//list和array必须有等于，不然没法运行
    for(let i=array.length-1;i>=0;i--){
        list={value:array[i],rest:list};
    }
    return list;
}
function listToArray(list){
    let array=[];
    for(let i=list;i;i=i.rest){
        array.push(i.value);
    }
    return array;
}
function prepend(value,list){
    return{value,rest:list};
}
function nth(list,x){
 if (!list) return undefined;//这一步是看的，自己考虑不完全，只测试了例子
  else if(x==0) return list.value;
  else return nth(list.rest,x-1);
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//深刻的比较  
//typeof 运算符返回一个用来表示表达式的数据类型的字符串。
//可能的字符串有：”number”、”string”、”boolean”、”object”、”function” 和 “undefined”。
//对于对象、数组、null 返回的值是 object 。比如typeof(window)，typeof(document)，typeof(null)返回的值都是object。
//Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 。如果对象的键-值都不可枚举，那么将返回由键组成的数组。
function deepEqual(x,y){
    if(x===y) return true;
    if(x==null||typeof x!="object"||y==null||typeof y!="object"){
        return false;
    }
    let first=Object.keys(x),second=Object.keys(y);
    if (first.length != second.length) return false;//这步是看到答案加上的，当时没有考虑比较 两者的长度
    for (let key of first){
        if(!second.includes(key) || !deepEqual(x[key],y[key])) return false;//自己编写时没有||前面的部分导致最后一个输出是false
        else return true;
    }
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

//第五章
//压扁
let array = [[1, 2, 3], [4, 5], [6]];
console.log(array.reduce((a,b)=>a.concat(b),[]);
// → [1, 2, 3, 4, 5, 6]

//you own loop
function loop(start,test,update,body){
    for(let value=start;test(value);value=update(value))
        body(value);
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

//Everything
function every(array,test){
    for(let key of array){
        if(!test(key)) return false;
    }
    return true;
}
function every2(array,test){
    return !array.some(key=>!test(key));
}
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

//主导写作方向
//"ltr"（从左到右），"rtl"（从右到左）或"ttb"（从上到下）。
//这个有点看不懂题所以自己没写出来
function dominantDirection(text) {
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
  
    if (counted.length == 0) return "ltr";
  
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl

  //第六章
  class Vec{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    plus(other){
        return new Vec(this.x+other.x,this.y+other.y);
    }
    minus(other) {
      return new Vec(this.x - other.x, this.y - other.y);
    }
  
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

//Groups
class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(aggregate) {
    let group = new Group;
    for (let value of aggregate) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
//→false

//Iterable groups
//这道题刚开始没有看懂后半部分的迭代器部分
class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(aggregate) {
    let group = new Group;
    for (let value of aggregate) {
      group.add(value);
    }
    return group;
  }
  [Symbol.iterator](){
      return new GroupIterator(this);
  }
}
class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return {done: true};
    } else {
      let result = {value: this.group.members[this.position],done: false};
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

//Borrowing a method
//hasOwnProperty所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。这个方法可以用来检测一个对象是否含有特定的自身属性；和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。
let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true