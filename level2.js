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
//输出一下
console.log(obj1);//1
  console.log(obj2);//4

  //浅拷贝就是可以把原来的对象的属性拷贝一份，拷贝的是属性，深拷贝就是在新的内存空间复制一个一模一样的对象，和原对象互不影响



 
  