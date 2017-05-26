let outputResult = function (list, options, humanChoice, computerChoice) {
    list.innerHTML = list.innerHTML + '<li>computer chose: ' + computerChoice + '</li>'
    // list.innerHTML = list.innerHTML + `<li>computer chose: ${computerChoice} </li>`

    if (options.includes(humanChoice)) {
        if (humanChoice === computerChoice) {
            list.innerHTML = list.innerHTML + '<li>it\'s a draw!</li>'
        } else {
            if (humanChoice === 'ROCK') {
                if (computerChoice === 'SCISSORS') {
                    humanWins = true
                } else {
                    humanWins = false
                }
            } else if (humanChoice === 'SCISSORS') {
                if (computerChoice === 'PAPER') {
                    humanWins = true
                } else {
                    humanWins = false
                }
            } else if (humanChoice === 'PAPER') {
                if (computerChoice === 'ROCK') {
                    humanWins = true
                } else {
                    humanWins = false
                }
            }

            if (humanWins) {
                list.innerHTML = list.innerHTML + '<li>you win!</li>'
            } else {
                list.innerHTML = list.innerHTML + '<li>you lose!</li>'
            }
        }
    } else {
        list.innerHTML = list.innerHTML + '<li>you lose! Choose a valid choice, loser</li>'
    }
}

let play = function () {
    let computerChoice
    let choicesSelected = false
    let humanChoice
    let result
    let r0
    let r1
    let r2
    let options
    let list = document.querySelectorAll("#list")[0]
    humanChoice = prompt('Choose rock, paper or scissors!').toUpperCase()

    r0 = Math.random()
    r1 = r0 * 3
    r2 = Math.floor(r1)

    options = ['ROCK', 'PAPER', 'SCISSORS']
    computerChoice = options[r2]

    outputResult(list, options, humanChoice, computerChoice)
}
