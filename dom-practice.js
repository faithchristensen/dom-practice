//when button is clicked say hello
function createTest() {
    console.log("Hello");
}


//insert element (When button is clicked, display text with an appended checkbox)
//change HTML attribute (class, src)
function displayCheckbox() {
   var needsChecked = document.getElementById('needsChecked');
   var checkboxToCheck = document.createElement('input');
   checkboxToCheck.setAttribute("type", "checkbox");
   needsChecked.append(checkboxToCheck); 
}


//delete HTML (when button is clicked, erase text)
//read what's inside elements
function deleteText() {
   var textToDelete = document.getElementById('deleteMe');
   textToDelete.innerHTML = "";
}


//read what's inside element
function insideText() {
   var textToRead = document.getElementById('textToRead');
   console.log(textToRead.innerHTML);
}