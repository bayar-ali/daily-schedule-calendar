 
    var todayDate = document.querySelector("#currentDay")



    var textAreaEl = document.querySelector("#textArea");
    var saveButton = document.querySelector("#button");
    var saveButton1 = document.querySelector("#button1")


    // the date 

    var currentDate = new Date();
    var month = currentDate.getMonth();
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();
    var fullDate = month + "/" + day + "/" + year;
    document.write(fullDate);
    //


    button1.onclick = function () {
        const key = button1.value;

        const value = textAreaEl.value;

        console.log(key)
        console.log(value)

        if (key && value) {
            localStorage.setItem(key, value);
            location.reload();
        }
    };
    
    saveButton.onclick = function () {
        const key = saveButton.value;

        const value = textAreaEl.value;

        console.log(key)
        console.log(value)

        if (key && value) {
            localStorage.setItem(key, value);
            location.reload();
        }
    };

    for (let i = 0; i < localStorage.length; i++) {

        const key = localStorage.key(i);

        const value = localStorage.getItem(key);

        textAreaEl.innerHTML += `${key}; ${value}<br />`;

    } 



































