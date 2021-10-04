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










