// // task 1
// const fruit=['apple banana apple grape apple']
// const replace=fruit[0].replaceAll('apple','orange');


// console.log(replace);


// // task 2
// const fruit=['apple','banana','grape']
//  const includes=fruit.includes('apple');
// console.log(includes)


// // task 3
// async function link() {
//         const res=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data=await res.json()
//         console.log(data)
// }
// link()



// task 4

// const { error } = require("console");
// const { console } = require("inspector");
// function division(a,b){
//     try{
//         if(typeof a!=='number'|| typeof b!=='number'){
//             throw new TypeError("Both arguments must be numbers");
//         }
//         if(b==0){
//             throw new Error("Cannot divide by zero");
//         }
//         return a / b;
//     }
//     catch (err){
//         console.error('Division error:', err.message)
//         return ;
//     }
// }
//  console.log(division(4, 2));
//  console.log(division(4,0));

// // task 5

// function person(name,age){
//     console.log('Hello my name is',name,' and I am ',age ,'years old')
// }
// person('Pattu',21)


// // task 6
// const person={ name: 'Alice', age: 25, city: 'New York' }

// const {name:UserName,age,city}=person;
// console.log(UserName)
// console.log(age)
// console.log(city)

// // task 7

// function add(a,b=10) {
//         console.log(a+b);
//     }      
// add(5,20);
// add(5);

// // task 9
// const add=[1,2,3,4,5];
// const number=add.reduce((n,a)=>n+a);
// console.log(number)

// task 8
function add(...numbers){
    let total=0;
    for (let num of numbers){
        total += num;
    }
    return total;

}
console.log(add(1,2,3,4,5));