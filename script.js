const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
function addInput(){
    if(addTask.value == ''){
        alert("PLEASE ADD A TASK!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = addTask.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    addTask.value = "";
    saveData();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();


