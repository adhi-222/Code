const buttons = document.querySelectorAll("button");

buttons.forEach( (button) => {
    button.addEventListener("dblclick",() => {
        if(button.id == "btn1"){
            alert("its the first btn")
        } else if(button.id == "btn2"){
            alert("its button 2")
        } else{
            alert("its the third btn")
        }
    })
})