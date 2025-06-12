// // task 1
// for(i=0;i<=10;i++){
//     console.log(i)
// }
// task 2
// for(i=0;i<=20;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }
// task 3
// for(i=0;i<=20;i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }
// task 4
// function factorial(n){
//     let result=1;
// for(i=1;i<=5;i++){
//     result*=i;
// }
// return result;
// }
// console.log(factorial(5))
// task 5
// let sum=0
// for(i=1;i<=100;i++){
//  sum=sum+i
// }
// console.log(sum)
// //  task 6
// let a=[1,2,3,4,5]
// let sum=0
// for(i=0;i<a.length;i++){
//     sum=sum+a[i]
// }
// average=sum/a.length;
// console.log(average)
// // task 7

// for(i=0;i<=5;i++){
//         row ="";
//     for(j=0;j<6;j++){
//         row+="*";
//     }
// console.log(row)
// }  
// // task 8
// for(i=0;i<=5;i++){
//     console.log(i)
// }
// task 9
// for(i=0;i<=10;i++){
//     console.log(i)
// }
// task 10
// let a=[1,2,3,45];
//     if(a[0]==a[a.length-1]){
//         console.log("true")
//     }
//     else{
//         console.log("false")
//     }
// task 11
// let a=[10,21,22,90]
// for(i=0;i<a.length;i++){
//     if(a[i]%5==0){
//         console.log(a[i])
//     }
// }
// task 12
// let letter="a";
// if(letter.length==1){
//     if(letter=="a"|letter=="e"|letter=="i"|letter=="o"|letter=="u"){
//         console.log("this letter is vowel")
//     }
//     else{
//         console.log("this is consonant")
//     }
// }
// task 13
// let i;
// let even=[]
// let odd=[]
// for(i=10;i<55;i++){
//     if(i%2==0){
//         even[even.length]=i
//     }
//     else{
//         odd[odd.length]=i
//     }
// }
// console.log(even.length)
// console.log(odd.length)
// // task 15
// let a=[12,3,4,5]
// let result=1;
// for(i=0;i<a.length;i++){
//     result*=a[i];
//     }  
// console.log(result);
// task 16
// let a=30;
// let b=20;
// let c=a*b;
// if(c>500){
//     console.log(a+b);
// }
// else{
//     console.log(c);
// }
//  task 17
// let a=10;
// let b=20;
// if(a>b){
//     console.log("A greatest number of b")
// }
// else{
//     console.log("b greatest number of a")
// }
// // task 18
// let a=10;
// let b=20;
// let c=30;
// if(a>b & a>c){
//     console.log("A greatest number ")
// }
// else if(b>a & b>c){
//     console.log("b greatest number ")
// }
// else {
//     console.log("c greatest number ")
// }
    // task 19
    let a= [23, 4, -6, 23, -9, 21, 3, -45, -8];
    let positive =[];
    let negative =[];
    for(i=0;i<a.length;i++){
        if(a[i]<0){

            negative.push(a[i])
        }
        else{
        positive.push(a[i])
    }
}
console.log(negative)
console.log(positive)
    

