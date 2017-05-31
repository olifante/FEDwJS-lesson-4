let computeResult = function(humanChoice) {
    let options = ['ROCK', 'SCISSORS', 'PAPER']
    // the options are "well-ordered", meaning that
    // each element "wins" over the next element
    // symbolically, ROCK > SCISSORS > PAPER ( > ROCK > ... > ... )

    let r0 = Math.random() // r0 is a real number between 0 and 1
    let r1 = r0 * 3 // r1 is a real number between 0 and 3
    let computerIndex = Math.floor(r1) // floor rounds real numbers down 
    let humanIndex = options.indexOf(humanChoice)

    console.log(`human index: ${humanIndex}; computer index: ${computerIndex}`)
    // the line above is using something cool from ES6: template strings
    // please note that backquote (`) is NOT the same as single-quote (')

    let result
    if (humanIndex === computerIndex) {
        result = 0
    } else {
        let indexAfterHumanIndex = (humanIndex + 1) % 3
        // the above line uses the remainder operator.
        // It's actually something you learned in primary school,
        // when studying imperfect division. Some examples:
        // 7 % 3 === 1
        // 10 % 5 === 0
        // 10 % 3 === 1

        if (computerIndex === indexAfterHumanIndex) {
            result = 1
        } else {
            result = -1
            // if it's not a draw or a victory, defeat is only option left
        }
    }
    return result
}

let outputResult = function(result) {
    let listElement = document.querySelectorAll("#listElement")[0]
    // querySelectorAll accepts standard CSS selector, e.g.
    // an element: document.querySelectorAll('h1')
    // a class: document.querySelectorAll('.someClass')
    // an ID: document.querySelectorAll('#someId')
    // it always returns an array, which for IDs should only
    // contain ONE element.

    if (result === -1) {
        listElement.innerHTML = listElement.innerHTML + '<li>you lose!</li>'
    } else if (result === 0) {
        listElement.innerHTML += '<li>it\'s a draw...</li>'
    } else if (result === 1) {
        listElement.innerHTML += '<li>you win!</li>'
    } else {
        console.log('Invalid input. Result should be -1, 0 or 1')
   }
}

let play = function () {
    let humanChoice = prompt('Choose rock, paper or scissors!').toUpperCase()
    let result = computeResult(humanChoice)
    outputResult(result)
}
