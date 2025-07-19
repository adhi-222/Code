let arr = [2,3,4,5,6];

let mapped = arr.map(display);

console.log(arr) // oraginal array wthout any change
console.log(mapped) // mapped array or new array

function display(element){
    return element * 2
}