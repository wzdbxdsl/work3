const person = {
    name: 'bbh',
    age: 30,
    address: {
      city: 'ChongQing',
      area: 'NanShan'
    },
    title: ['student',{year:2022, title:'GoodStudent'}]
  }

  const {name}=person;
  const {age: year}=person;
  const {address: {city}}=person;
  const {address:{area: mountain}}=person;
  let {title:[title1,{year:year2,title: title2}]} = person;

console.log(name) // bbh
console.log(year) // 30
console.log(city) // ChongQing 
console.log(mountain) // NanShan //这里没有写错，就是要输出NanShan，结合课件
console.log(title1) // student
console.log(title2) // GoodStudent