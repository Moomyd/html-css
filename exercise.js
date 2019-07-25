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
    let list=null;
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
 if (!list) return undefined;//看到答案看到这一步，自己考虑不完全，只测试了例子
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