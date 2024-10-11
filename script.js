const textBox = document.getElementById("textBox");
const listContainer =document.getElementById("listContainer");

function addTask(){
    if (textBox.value === '') {
        alert("Add your Task");
        
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = textBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    textBox.value = "";
    saveTask();

}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
})


function saveTask(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();