// function sayMyName(){
//     console.log("M");
//     console.log("A");
//     console.log("N");
//     console.log("A");
//     console.log("A");
// }

// sayMyName()  // execution of function

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result // their will be no change after using (return)
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("manas"))
console.log(loginUserMessage("manas"))
