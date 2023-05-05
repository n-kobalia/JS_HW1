
// isequal function
function isEqual(a,b){
    if(a === b){
        console.log("this numbers is equal")
    }else{
        console.log("this numbers is not equal")
    }
}


isEqual(4,4)

// fahrenheit To Celsius function
function fahrenheitToC(tempf){
    if(typeof tempf == "number"){
        return (5/9) * (tempf - 32)
    }else{
        return false
    }
}


console.log(fahrenheitToC(150))


// calculator function
function calc(a,b,op){
    if(typeof a == "number" && typeof b == "number" && op == "+"){
        return a + b
    }else if(typeof a == "number" && typeof b == "number" && op == "-"){
        return a - b
    }else if((typeof a == "number" && typeof b == "number" && op == "*")){
        return a * b
    }else if((typeof a == "number" && typeof b == "number" && op == "/")){
        return a / b
    }else{
        return false
    }
}


console.log(calc(5,50,"+"))
