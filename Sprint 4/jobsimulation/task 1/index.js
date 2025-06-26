const userName = document.getElementById('name');
const age= document.getElementById('age');
const submitBtn=document.getElementById('submit');
const nameError=document.getElementById('nameError');
const ageError=document.getElementById('ageError');

let error={};
const validation=(name,age)=>{
  if(!name|| name.trim()===''){
    error.name='Name is required';
  }
  if( age===undefined || age===null||age==''){
    error.age='Age is required';
  }
  else if(isNaN(age)){
    error.age='age is must be Number';
  }
  else if(age<0||age>100){
    error.age = 'Age must be between 0 and 100.';
  }
  return error;
};
submitBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  nameError.innerText='';
  ageError.innerText='';
  const error=validation(userName.value,age.value);

  if(error.name){
    nameError.innerText=error.name;
  }
  if(error.age){
    ageError.innerText=error.age;
  }
  if(!error.name && !error.age){
  localStorage.setItem('userdata',JSON.stringify({Name:userName.value,Age:age.value}));
  window.location.href='./display.html';
  }



});