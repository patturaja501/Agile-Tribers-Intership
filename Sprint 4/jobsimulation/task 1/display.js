const display=document.getElementById('display');
const userdata=JSON.parse(localStorage.getItem('userdata'));

display.innerHTML=`
<div><strong>Name:${userdata.Name}</strong></div><br>
<div><strong>Age:${userdata.Age}</strong></div>`;















