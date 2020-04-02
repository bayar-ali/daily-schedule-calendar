var todayDate = document.querySelector("#currentDay")

        
var textAreaEl = document.querySelector("#textArea"); 
var saveButton = document.querySelector("#savebutton");


// the date 

var currentDate = new Date();
var month = currentDate.getMonth();
var day = currentDate.getDate(); 
var year = currentDate.getFullYear(); 
var fullDate = month + "/" + day + "/" + year;
document.write(fullDate); 
//


saveButton.onclick = function() {
    const key = saveButton.value;

    const value = textAreaEl.value;

console.log(key)
console.log(value)

    if (key && value) {
        localStorage.setItem(key, value); 
        location.reload(); 
    }
};

for (let i =0; i < localStorage.length; i++) {

    const key = localStorage.key(i);

    const value = localStorage.getItem(key); 

    textAreaEl.innerHTML += `${key}; ${value}<br />`; 

}



    








 


