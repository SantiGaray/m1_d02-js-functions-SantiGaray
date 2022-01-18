// Class code examples // function protect names // always return something // invocation always

const myName = "Desarrolladores masquerados"

function cappuccino(){
    const myName = "Santiago"
    // this is a block
    return myName
}

// console.log( cappuccino().toUpperCase() )

function printGreeting(cappuccino, lalala){ // this is equivalent of a let declaration
    console.log(cappuccino)
}

const studentsnames = ["Santiago", "Luisa", "Alejandro", "Stan"]

for( const student of studentsnames){ // This is equivalent to for(let = i )
   console.log("returnfrom printGreeting() : " , printGreeting(student))
}


function myAwesomeFunction(cappuccino, anotherName){ // let cappuccino is an impicit definition
    console.log(cappuccino)
    console.log(anotherName) // anotherName is not defined
   }
   
   myAwesomeFunction("ciccio", "", "carlos")


   function sideEffects(anyVariable){
       anyVariable.pop()
       anyVariable.push("You have been destroyed")
       return anyVariable
   }

   const myParameter = ["What a Nice Day"]

   console.log(myParameter === sideEffects(myParameter))
   console.log(myParameter)

// You can declare with an "expression"
const declareAFunction = function () { console.log("Funciton declared with and expression")}

// You can delcare with an "expression"
const declareAFunction = function () { console.log("Funciton declare with an expression")}