/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let comp = []
    for(let i = 0; i < tokens.length; i++){
        if (tokens[i] === "+"){
            let num1 = comp.pop()
            let num2 = comp.pop()
            comp.push(num1+num2)
        } else if (tokens[i] === "-"){
            let num1 = comp.pop()
            let num2 = comp.pop()
            comp.push(num2-num1)
        } else if (tokens[i] === "*"){
            let num1 = comp.pop()
            let num2 = comp.pop()
            comp.push(num1*num2)
        } else if (tokens[i] === "/"){
            let num1 = comp.pop()
            let num2 = comp.pop()
            comp.push(Math.trunc(num2/num1))
        } else {

            comp.push(parseInt(tokens[i]))
        }
    }
    return comp.pop()
};

module.exports = evalRPN;