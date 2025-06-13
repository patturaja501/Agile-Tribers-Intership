
const prompt= require("prompt-sync")({sigint:true});
while(true){
    let a=parseFloat(prompt("Enter the value :"));
    let b=parseFloat(prompt("Enter the value: "));
    let operation=prompt("Enter the operation:(+,-,/,*)");
    let result;
if(isNaN(a)||isNaN(b)){
    console.log("enter the a and b value");
    continue;
}
switch (operation){
    case"+":
        result=a+b;
        console.log("addition:",result);
        break;
    
    case"-":
        result=a-b;
        console.log("subtration:",result);
        break;
    
    case"*":
        result=a*b;
        console.log("mutiple:",result);
        break;
    
    case"/":
    if(b==0){
        console.log("division is not allowed in zero")
        break;
    }
    result=a/b;
    console.log("division:",result);
    break;
    
    
    default:
        console.log("please enter the opertion");
   }
}
