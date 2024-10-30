//Function hoisting
function exemploHoisting() {
    console.log("function hoisting");
}

exemploHoisting();

//Function expression
const exemploExpression = function() {
    console.log('Function expression');
}

exemploExpression();

//Arrow function
const arrowFunction = () => {
    console.log("Arrow function");    
}

arrowFunction();