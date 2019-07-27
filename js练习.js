//使用arguments
//函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。
//在函数代码中，使用特殊对象 arguments，开发者无需明确指出参数名，就能访问它们。 也就是说arguments对象的长度是由实参个数而不是形参个数决定的。 
//另外，大家都知道，javascript中，函数是不可以重载的，用 arguments 对象判断传递给函数的参数个数，即可模拟函数重载：
function useArguments() {
    var sumAdd = 0;
     //循环求值
     for(var j = 0; j < arguments.length; j++){
         sumAdd += arguments[j];
     }
     return sumAdd;
 }
 console.log(useArguments(1,2,3,4));
 //->10

 //计算数字 k 在 0 到 n 中的出现的次数，k 可能是 0~9 的一个值。
function counted(n,k){
    let count=0;
    for(let i=1;i<=n;i++){
        let str=i.toString();
        for(let j=0;j<str.length;j++){
            if(str.charAt(j)==k)//charAt() 方法可返回指定位置的字符。
              count++;
        }
    }
    return count;
}
console.log(counted(12,1));
//->5

//数组去重编写一个函数 unique(arr)，返回一个去除数组内重复的元素的数组。
//Set是一种新的数据类型，它会把重复的item去掉，然后Array.from方法会把类数组的数据类型转化成数组。
//方法一，简单的
let arr = [1,2,2,2,3,4,4,5];
arr = Array.from(new Set(arr));
console.log(arr);//[1,2,3,4,5]
//方法二
//arrayObject.splice(index,howmany,item1,.....,itemX)
//index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
//howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目。
//item1, ..., itemX	可选。向数组添加的新项目。
function unique(arr){            
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
                arr.splice(j,1);
                j--;
            }
        }
    }
return arr;
}
console.log(unique([1,2,2,3,3,4,4,5]));

//不重复数字
//编写一个 JavaScript 函数 uniqueNums，该函数有一个参数 n（一个不大 31 的整数），其返回值是一个数组，该数组内是 n 个随机且不重复的整数，且整数取值范围是 [2, 32]。
function fn(n)
    {
        var array = new Array();//创建一个空的数组，存储要返回的数组。
        for(var i= 0; i<n; i++)
        {
            //获得2到32范围的随机数
            var rnd = getRand(2, 32);                   
            if(isIncluded(rnd, array))
            {
                i--; 
                //如果数组里面有这个数，让i在下一个循环不变。
                //这里的i--抵消掉了循环后的i++
            }
            else
            {               
                array.push(rnd);//如果数组里没有这个随机数，就允许添加进这个数组。
            }
        }   
        return array;
    }
 
    //传递一个数据类型和数组，判断数组内是否有前者。
    function isIncluded(element, array)
    {
        for (var i = 0, len = array.length; i < len; i++) 
        {
            if(array[i] == element)
            {
                return true;
            }
        }
        return false;
    }
 
    //传入一个范围，返回一个该范围的随机数。
    function getRand(min, max)
    {
        //如果输入的min比max大，将它们的值交换
        if( max< min)
        {
            var n = max;
            max = min;
            min = n;
        }
        //注意是max-min+1而不是max-min
        return Math.floor(Math.random()* (max-min+1) ) + min;//Math.random() 函数返回一个浮点,  伪随机数在范围[0，1)
    }
 
    //输出
    let demo = fn(31);//如果参数是比31还要大的数，可是会无限循环的哦。
    for(var i= 0; i<demo.length; i++)
        {
            console.log(i+":"+demo[i]);
        }

    //给出两个数组，写出一个方法求出它们的交集
    let intersection = a.filter(v => b.includes(v));//用于把Array的某些元素过滤掉，然后返回剩下的元素。

