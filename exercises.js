// EXERCISE 3.1
console.log('EXERCISE 3.1')

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
export function flattening(list){
    let result = list.reduce((previousValue, currentValue) => 
    previousValue.concat(currentValue)
    )
   return result 
}
// → [1, 2, 3, 4, 5, 6]
console.log (flattening(arrays))

// EXERCISE 3.2
console.log('EXERCISE 3.2')
// Your code here.
export function loop (value, test, update, body){

let curValue = value 

while(test(curValue)){
    console.log("Iteration, curValue"+curValue)
    //if true
    console.log("calling body:")
    body(curValue)
    curValue = update(curValue)
}
}

loop(3, n => n > 0, n => n - 1, console.log); //this was given to me from the exercise to test the funtion i wrote
// → 3
// → 2
// → 1

//EXCERCISE 3.3 & 3.4
//Implement two versions of every (everySome and everyLoop) as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

//LOOP VERSION
export function everyLoop (array, test){
    let curResult = true

    for(let item of array){
        //console.log(test(item))
        curResult = curResult && test(item)
    }
    return curResult
}

//SOME VERSION
export function everySome (array, test){
    return !array.some((value)=>!test(value))
}

console.log('EXERCISE 3.3')
//THIS WAS GIVEN TO ME
console.log("should be true")
console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log("should be flase")
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log("should be true")
console.log(everyLoop([], n => n < 10));
// → true

console.log('EXERCISE 3.4')
//Test with some
console.log("should be true")
console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log("should be flase")
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log("should be true")
console.log(everySome([], n => n < 10));
// → true

