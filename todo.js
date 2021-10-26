var item, list, feedback;
item = document.getElementById("item");
list = document.getElementById("list");
feedback = document.getElementById("feedback");


//function to add new task
function addToList() { 
    var linkToElement = document.createElement("a"),
        newElement = document.createElement("li");
    newItem = item.value
    newElement.innerHTML = newItem;
    linkToElement.appendChild(newElement);
    list.appendChild(linkToElement);
    feedback.innerHTML = "Item added.";
}


//function to remove tasks
function removeFromList(e) {
    var target, elParent, elGrandparent;
    target = e.target;
    elParent = target.parentNode;
    elGrandparent = target.parentNode.parentNode;
    elGrandparent.removeChild(elParent);
    e.preventDefault();
    feedback.innerHTML = "Item removed.";
}

//remove task when clicked
list.addEventListener("click", function (e) {
    removeFromList(e);
}, false);

//add task when button is clicked
var btn = document.getElementById("add");
btn.addEventListener("click", addToList, false);