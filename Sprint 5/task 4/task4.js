// task 1
// const number=[-5, -3, 0, 9, 2]
// function postive(){
//     for(let num of number){
//         if(num>0){
//             return num;
//         }
//     }
// }
// console.log(postive())


// // task 2
// const books = [
// { title: '1984', author: 'George Orwell' },
// { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
// { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
// ];
// function find(title){
//     return books.find((books)=>books.title==title);
// }
// console.log(find('1984'))


// // task 3

// const employees = [
// { id: 1, name: 'Alice', position: 'Manager' },
// { id: 2, name: 'Bob', position: 'Engineer' },
// { id: 3, name: 'Charlie', position: 'Technician' }
// ];
// function findid(id){
//     return employees.find((employees)=>employees.id==id);
// }
// console.log(findid(2))


// task 4
// const number=[4, 6, 8, 9,11, 15]
// function isPrime(num){
//     if(num<=1)
//         return false;
//     for(let i=2; i<=Math.sqrt(num); i++){
//         if(num% i==0)
//             return false;
//     }
//     return true;
// }
// function findnumber(){
//     for(let num of number){
//         if( isPrime(num))
//             return num;
//     }
// }
// console.log(findnumber())


// // task 5 
// const person={ firstName: 'John', lastName: 'Doe', age: 30 };
// console.log(`${person.firstName} ${person.lastName} is ${person.age} Year Old`)


// // task 6
// const number=[1, 2, 3, 4, 5, 6]
// const even=number.filter((n)=>n%2==0);

// const muliple=even.map((n)=>n*n);
// console.log(muliple)

// // task 7
// function rest(...value){
//     if(value.length==0) return[];
//     const[first,...restArr]=value;
//     const letter=(typeof first=='string'&& first.length>0)?
//     first[0].toUpperCase()+first.slice(1) :first;
//     return[letter,...restArr]
// }
// console.log(rest('apple', 'banana', 'cherry'))

// // task 8
// const number=[[1, 2, 3], [3, 4, 5]]
// const num=number.reduce((n,a)=>n.concat(a),[])

// const set=[...new Set(num)]

// console.log(set)


// // task 9
// async function link() {
//     const res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data=await res.json()
//       console.log(data)
// }
// link()

// task 10
const data=[
{ name: 'Laptop', price: 1000 },
{ name: 'Phone', price: 500 },
{ name: 'Tablet', price: 700 }
]
function average(){
 const total= data.reduce((n,a)=>n+a.price,0)
 const counts=data.length;
 const totalaverage=total/counts;
 const average=data.filter((n)=>n.price>totalaverage)
 for(let num of average)
 console.log(num.name)

}
average()
 
