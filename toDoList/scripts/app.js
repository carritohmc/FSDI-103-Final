let taskList = [];
const inputTask = document.getElementById("txtTask"); 
function addTask(){
let task = inputTask.value; 


if (task==""){
alert("Add a task")
} else{
    taskList.push(task);
    displayTask();
    inputTask.value=""; 
    }
updateInfo();
}


function displayTask(){
    let tmp="";
    const ul =document.getElementById("List");
    for(let i=0; i<taskList.length; i++){
        tmp+=`
        <li id="${i}"> ${taskList[i]}<button onclick = "deleteTask(${i});"> Delete </button></li>
        <hr>
        `;
    }
 ul.innerHTML=tmp;
}

function deleteTask(id){
    document.getElementById(id).remove(); 
    let index= taskList.indexOf(taskList[id]);
    taskList.splice(index,1);
    updateInfo(); 

}

function updateInfo(){
    let taskInfo=taskList.length;
    const h3 = document.getElementById("infoHeading");

if (taskList.length > 0)
{

    for(let i=0; i<taskList.length; i++){
        taskInfo=`
        <h3> Tasks: ${taskList.length}</h3>
        `;
        console.log(taskList.length);

}
h3.innerHTML=taskInfo;
}
else if (taskList==0)
{
        taskInfo=`
        <h3> Zero Tasks</h3>
        `;
        console.log(taskList.length);
h3.innerHTML=taskInfo;
}
}

function init(){
    updateInfo();
}




window.onload=init; //to wait for html.