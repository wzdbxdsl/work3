//创建一个对象
const obj1 = {
    age:1
  }

  //新的对象

  const obj2={}

  //使用object.assign拷贝

  Object.assign(obj2,obj1);

//修改了新对象的值
  obj2.age=4;
//
console.log(obj1);
  console.log(obj2);
 
  