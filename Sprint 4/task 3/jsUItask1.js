// //    task 1
//    const details={
//             Name:"Pattu Raja",
//             Age:"21",
//             city:"Sivanthiya Puram",
//         };
//         console.log(details);
//         details.Name='Suman';
//         console.log(details);
// // // task 2
// const name={
//     FirstName:'Pattu',
//     LastName:'Raja',
//     FullName: function(){
//         return this.FirstName+' '+this.LastName;
//     }
// };
// console.log(name.FullName());
// // task 3
// const name={
//     "Name":"Pattu Raja",
//     "gamil":"pattu501@gmail.com",
//     "skills":["Python","js","Java"]
// }
// const json = JSON.stringify(name);
// const details=JSON.parse(json);
// console.log(details);
// task 4
async function a() {
    const name= await fetch('http://192.168.106.45:8080/data.json');
    const user= await name.json();
    console.log(user);
}
a();

