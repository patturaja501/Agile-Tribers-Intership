// // task 1
// const fruit=['apple', 'banana', 'cherry', 'date']

// const longest=fruit.reduce((n,a)=> a.length > n.length ? a : n);
// console.log(longest)


// // task 2

// const number=[[1, 2, 3], [4, 5], [6, 7, 8, 9]]
// // let num=[]
// const num=number.reduce((n,a)=>n.concat(a),[]);
// console.log(num);


// // task 3
// const fruit=['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// const counts=fruit.reduce((n,word)=>{
//     n[word]=(n[word]||0)+1;
//     return n;
// },{});
// console.log(counts);


// // task 4
// const people = [
// { name: 'Alice', age: 21 },
// { name: 'Bob', age: 25 },
// { name: 'Charlie', age: 21 },
// { name: 'David', age: 25 },
// { name: 'Eve', age: 22 }
// ];
// const group=people.reduce((n,a)=>{
//     if(!n[a.age]){
//         n[a.age]=[];
//     }
//     n[a.age].push(a.name,a.age)
//         return n;
// },{})
// console.log('age:',group)


// // task 5
// const cart = [
// { item: 'apple', price: 1.5 },
// { item: 'banana', price: 2.0 },
// { item: 'orange', price: 1.25 }
// ];
// const total=cart.reduce((n,a)=>n+a.price,0);


// console.log(total)


// // task 6
// const number=[1, 3, 7, 10, 2]

// const num=number.reduce((n,a)=>n%2||a%2 ? a:n)

// console.log(num)


// task 7

// const students = [
// { name: 'Alice', age: 21 },
// { name: 'Bob', age: 25 },
// { name: 'Charlie', age: 23 }
// ];
// function findstudentname(name){
//      return students.find((students)=> students.name==name);
// }
// console.log(findstudentname('Bob'));


// // task 8
// const products = [
// { id: 101, name: 'Laptop' },
// { id: 102, name: 'Phone' },
// { id: 103, name: 'Tablet' }];
// function findid(id){
//     return products.find((products)=>products.id==id);
// }
// console.log(findid(102))

task 9

const tasks = [
{ taskName: 'Task 1', dueDate: '2023-06-01' },
{ taskName: 'Task 2', dueDate: '2024-05-01' },
{ taskName: 'Task 3', dueDate: '2024-01-01' }
];
const overdue=tasks.reduce((n,a)=> {
    return n.dueDate < a.dueDate ? n:a;
});
console.log(overdue)