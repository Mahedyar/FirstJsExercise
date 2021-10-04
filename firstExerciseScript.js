const minMaxer = (a,b) => {
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    console.log("the Max number is %s " , max)
    console.log("the Min number is %s" , min)
}

const stringChecker = (a) => {
    if (typeof a === "string"){
        console.log("The input is a string")
    }else {
        console.log("The input is not a string")
    }
}

const fizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0 ){
        console.log("FizzBuzz")
    }else if(number % 3 === 0 ) {
        console.log("Fizz")
    }else if(number % 5 ===0 ){
        console.log("Buzz")
    }else {
        console.log(number)
    }
}

const power2Checker = (num) => {
let i = 0 ;
    while ( 2** i <= num){
        ++i
        if (2**i > num){
            console.log(2**i)
        }
    }
}

const maghsum = (number) => {
    let store = 0 ;
    let i = 1 ;
    while ( store < number){

        if (number % i === 0){
            store = store + i ;
        }
        ++i ;
    }
    if (store === number){
        console.log("YES")
    }else {
        console.log("NO")
    }
}

const Avval = (a) =>{
    let i = 2
    while ( i < a) {
        if (a % i === 0){
            return false
        }
        ++i ;
    }
    return true
}

const avvalShow = (firstNumber , secondNumber) =>{
    let result = "";
    let max = Math.max(secondNumber , firstNumber)
    let min = Math.min(secondNumber,firstNumber)

    while (max > min+1){
        max-- ;
        if (Avval(max)===true){
            result += max + ","
        }
    }
    console.log(result.substring(0, result.length-1))
}


const maxmaker = (number) => {
   return  10**(number-1) - 1
}

const numDivider =(number) => {
    let answer = number.toString(1)
    console.log(answer)
    // while (number/10 >= 1){
    //     storage = (number - (number % 10) ) /10
    //     console.log(storage)
    //     number = (number - (number % 10) ) /10
    // }
}
// function passMaker(N){
//     let max = maxmaker(N)
//     while (max > 100){
//
//     }
// }


numDivider(5)














