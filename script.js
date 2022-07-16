const resultDiv = document.getElementById('result')
const handsDiv = document.getElementById('hands')
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')

const totalScore = {computerScore: 0, playerScore: 0}

function getComputerChoice() {
  const choices = ['Rock', 'Scissors', 'Paper']

  const randomIdx = Math.floor(Math.random() * 3)
  return choices[randomIdx]
}



function getResult(playerChoice, computerChoice) {
  let score

  if (playerChoice === computerChoice) {
    score = 0
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors' ||
    playerChoice === 'Scissors' && computerChoice === 'Paper' ||
    playerChoice === 'Paper' && computerChoice === 'Rock'
  ) {
    score = 1
  } else {
    score = -1
  }

  return score
}

function showResult(score, playerChoice, computerChoice) {
  if(score === -1) {
    resultDiv.innerText = 'You Lose!'
    totalScore.computerScore += 1
  } else if (score === 0) {
    resultDiv.innerText = "It's a tie!"
  } else  {
    totalScore.playerScore += 1
    resultDiv.innerText = 'You Won!'
  }

  handsDiv.innerText = `Player: ${playerChoice} vs Computer: ${computerChoice}`
  playerScore.innerText = `Your Score: ${totalScore.playerScore}`
  computerScore.innerText = `Computer Score: ${totalScore.computerScore}`
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)

  showResult(score, playerChoice, computerChoice)
}

function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')

  rpsButtons.forEach( button  => {
    button.addEventListener('click', () => onClickRPS(button.value) )
  })

  const endGameBtn = document.getElementById('endGameButton')
  endGameBtn.addEventListener('click', () => endGame())
}

function endGame() {
  totalScore.playerScore = 0
  totalScore.computerScore = 0
  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScore.innerText = ''
  computerScore.innerText = ''
}

playGame()