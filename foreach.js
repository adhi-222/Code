let arr = [1,2,3,4]


arr.forEach(double);
arr.forEach(display);

function double(element, index, array){
    array[index] = element * 2
}

function display(element){
    console.log(element)
}