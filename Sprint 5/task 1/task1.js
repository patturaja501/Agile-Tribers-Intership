// // task 1
// let a =[1,2,3,4,5];
// let b=[];
// function normalfunction(a){
//     const c=a*a;
//     b.push(c);
// }
// const arrow= a.map((a) =>(a*a));
// console.log(arrow)
// a.map(normalfunction);
// console.log(b)



// // task 2
// const obj1={a:1,b:2}
// const obj2={c:2,d:3}
// const obj3={e:4,f:5}

// const  Spread={...obj1,...obj2,...obj3}
// console.log(Spread);


// // task 3
// const student=[
//     {name:'PattuRaja',mark:90},
//     {name:'Suman',mark:90}
// ]
// function findname(name){
//     return student.find((student) => student.name=name);
// }
// console.log(findname('suman'))


// // task 4
// const num=[1,2,2,3,4,4,4,5,6];
// const set=[...new Set(num)];
// console.log(set);



// task 5
// const name=['PattuRaja','Suman','EsaiVani','Shjin','Dhanush']

// const filter=name.filter((names)=>names.length>5);

// console.log(filter);


// // task 6
// const num=[1,2,3,4,5]

//     const number=num.reduce((n,a)=>a*n);
// console.log(number)


// // // task 7
// const num=[9,2,34,66,7,78]
// function arrayindex(arr,item){
// return{
//  first:arr[0],
//  last:arr[arr.length-1]
// }
// }
// console.log(arrayindex(num))



// // task 8

// console.log(Array.isArray([1,2,3]))
// console.log(Array.isArray("Pattu"))


// // task 9

// const Text="The quick brown Fox jumps over the lazy dog";
// console.log(Text.includes("Fox"));

const name=["Esai","Pattu","suman"]
const keys= name.keys()
for(let key of keys){
console.log(key)
}

