let computeResult = function(humanChoice) {
    let result
    let options = ['ROCK', 'SCISSORS', 'PAPER']

    let r0 = Math.random()
    let r1 = r0 * 3
    let computerIndex = Math.floor(r1)
    let humanIndex = options.indexOf(humanChoice)
    console.log(`human index: ${humanIndex}; computer index: ${computerIndex}`)
    // the line above is using something cool from ES6: template strings
    // please note that ` backquote is NOT the same as single-quote '
    if (humanIndex === computerIndex) {
        result = 0 
    } else {
        let indexAfterHumanIndex = (humanIndex + 1) % 3
        if (computerIndex === indexAfterHumanIndex) {
            result = 1
        } else {
            result = -1
        }
    }
    return result
}

let outputResult = function(result) {
    let listElement = document.querySelectorAll("#listElement")[0]

    if (result === -1) {
        listElement.innerHTML = listElement.innerHTML + '<li>you lose!</li>'
    } else if (result === 0) {
        listElement.innerHTML += '<li>it\'s a draw...</li>'
    } else if (result === 1) {
        listElement.innerHTML += '<li>you win!</li>'
    } else {
        // error! Should never get here
    }
}

let play = function () {
    let humanChoice = prompt('Choose rock, paper or scissors!').toUpperCase()
    let result = computeResult(humanChoice)
    outputResult(result)
}
