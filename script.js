const inputbox=document.getElementById("input");
const listcontainer=document.getElementById("tasklist");
function addtask() {
    if(inputbox.value==='') {
        alert("You must write something!");
    }
    else {
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";  //for cross icon
        li.appendChild(span);
    }
    inputbox.value="";
}
//for click function
listcontainer.addEventListener("click",function(e) {
    if(e.target.tagName==="LI") e.target.classList.toggle("checked");
    else if(e.target.tagName==="SPAN") e.target.parentElement.remove();
}, false);

