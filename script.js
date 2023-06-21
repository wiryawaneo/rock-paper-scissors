const choices = ['rock', 'paper', 'scissors']

function getComputerChoice(options) {
   return console.log(options[Math.floor(Math.random()*options.length)])
}

getComputerChoice(choices)