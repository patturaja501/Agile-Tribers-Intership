const input=document.getElementById('task');
const submitbtn=document.getElementById('submit');
const tasks=document.getElementById('data');

let tasklist=[];

submitbtn.addEventListener('click',() =>{
    if(input.value.trim() !==''){
        if(!tasklist.includes(input.value)){
            tasklist.push({id:input.value,name:input.value});
            input.value='';
        }
    }
    else{
        alert('task must be a unique')
    }
    render();
});
const render=()=>{
    
    let html='';
    
    tasklist.forEach((val)=>{
        html +=`
       <li class="list">
        <div>${val.name}</div>
        <div class="main">
            <div class="edit" data-index="${val.id}">
                <img src="./img/edit.png" alt="edit">
            </div>
            <div class="trash" data-index="${val.id}">
                    <img src="./img/trash.png" alt="trash">
                </div>
            
            </div>
        </li>`;
    });
    
    tasks.innerHTML= html;
}
tasks.onclick=(e)=>{
    
    const editbtn=e.target.closest('.edit');
    const deletebtn=e.target.closest('.trash');
    
    if(editbtn){
        
        const id= editbtn.getAttribute('data-index');
        const task=tasklist.find((val)=>val.id==id);
        if(!task) return;
        const newValue= prompt("Edit Student Name:",task.name);
        if(newValue===null) return;

        const trimmed=newValue.trim();
        if(trimmed=='') return alert('Name cannot be empty');

        const isdupicate=tasklist.some((val)=>val.name==trimmed && val.id==id);
        if(isdupicate) return alert('Task must be unique');

        task.name=trimmed; 
        render();

    }
    if(deletebtn){
        const id=deletebtn.getAttribute('data-index');
        tasklist=tasklist.filter((val) => val.id !== id);
        render();
    }
};
