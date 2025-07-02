const input=document.getElementById('name')
const btn=document.getElementById('submit')
const search=document.getElementById('search')
const reload=document.getElementById('reload')
const total=document.getElementById('total')
const stdlist=document.getElementById('StudentList')

let studentList=[];

reload.addEventListener('click',()=>{
    studentList=[]
    renderStudents();

});
btn.addEventListener('click',()=>{
    if(input.value.trim() !==''){
        if(!studentList.includes(input.value)){
            studentList.push({id:input.value ,name:input.value})
            input.value='';
        }
    }
    
    else{
        alert('stundents must be uniques')
    }
    renderStudents();
});
search.addEventListener('input',()=>{
    const display=search.value.trim();
    renderStudents(display)
})

total.innerHTML=`Total Student :${studentList.length}`

const renderStudents=(filter='')=>{
    let html='';
    const filterStudent=studentList.filter((val)=>val.name.toLowerCase().includes(filter.toLowerCase()))
    filterStudent.forEach((val)=>{
        html += `
        <li
        class="list"
        data-id="${val.id}"
        draggable="true"
        >
            <div>${val.name}</div>
            <div class="icon-container">
                <div class="edit" data-index="${val.id}">
                    <img src="./img/edit.png" alt="edit"  />
                </div>
                <div class="trash" data-index="${val.id}">
                    <img src="./img/trash.png" alt="trash" />
                </div>
            </div>
        </li>
        `;
    })
    stdlist.innerHTML=html;
    total.innerHTML=`Total Stundent :${studentList.length}`
}
let draggedId=null;
stdlist.addEventListener('dragstart',(e)=>{
    const li=e.target.closest('li');
    if(!li)return;
    draggedId=li.dataset.id
})
stdlist.addEventListener('dragover',(e)=>{
    e.preventDefault()
});
stdlist.addEventListener('drop',(e)=>{
    const li=e.target.closest('li');
    if(!li)return;
    const targetId=li.dataset.id;
    if(draggedId===null || targetId===null || draggedId===targetId) return;

    const fromIndex=studentList.findIndex((val)=> val.id===draggedId)
    const toIndex=studentList.findIndex((val)=>val.id===targetId)

    
    const [movedstudent] = studentList.splice(fromIndex, 1);
    studentList.splice(toIndex, 0, movedstudent);
    renderStudents();
});

stdlist.onclick=(e)=>{
    const editBtn=e.target.closest('.edit')
    const deletebtn=e.target.closest('.trash')
    if(editBtn){
        const id=editBtn.getAttribute('data-index')
        const student=studentList.find((val)=>val.id==id)
        if(!student)return;

        const newValue=prompt('edid Student Name:',student.name);
        if(newValue==null)return;

        const trimmed= newValue.trim();
        if(trimmed=='') return alert('Name cannot be empty');

        const isDuplicate=studentList.some((val)=>val.name==trimmed && val.id !==id)
        if(isDuplicate)return alert('student must be unique');
        
        
        student.name=trimmed;
        renderStudents()
    }
    if(deletebtn){
        const id=deletebtn.getAttribute('data-index')
        studentList=studentList.filter((val)=>val.id !==id)
        renderStudents();
    }
}
