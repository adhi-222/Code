let inputfld = document.querySelector("input");

const btn = document.querySelector("button");

const ullist = document.querySelector("ul")

function getValue(){
    let val = inputfld.value;
    inputfld.value = "";
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");


    listItem.append(span)
    listItem.append(button1)
    listItem.append(button2)

    span.textContent = val;

    button1.textContent = "DELETE";
    button1.addEventListener("click", () => {
        ullist.removeChild(listItem)
    })

    button2.textContent = "MODIFY";
    button2.addEventListener("click", () =>{
        inputfld.value = span.textContent;
        ullist.removeChild(listItem)
    })
    ullist.append(listItem)
    inputfld.focus()
}

btn.addEventListener("click", () => {
    getValue()
})
