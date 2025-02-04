// idk how to make this more simple
let box0 = document.getElementById("0")
let box1 = document.getElementById("1")
let box2 = document.getElementById("2")
let box3 = document.getElementById("3")
let box4 = document.getElementById("4")
let box5 = document.getElementById("5")
let box6 = document.getElementById("6")
let box7 = document.getElementById("7")
let box8 = document.getElementById("8")
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let result = document.getElementById("result")
let repeat = document.getElementById("repeat")

// create list of box
let boxes = [box0, box1, box2, box3, box4, box5, box6, box7, box8]

// create the board
let board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
  ]
  
let count = 0 
let indexList = []
let timer = 5

// Called when player hit the box
function game(row, col, idxBox) {
  let sym1 = "<i class='fa-solid fa-x'></i>"
  let sym2 = "<i class='fa-solid fa-o'></i>"
  let player
  
  if (indexList.some(([r, c]) => r === row && c === col)) {
      return alert("⚠️ Error: Kotak Sudah Terisi ⚠️")
  }
  
  if (count % 2 == 0) {
    player = sym1
    player1.style.opacity = ".5"
    player1.style.animation = "none"
    player2.style.opacity = "1"
    player2.style.animation = "jedagjedug 1s infinite"
  }
  else if (count % 2 == 1) {
    player = sym2
    player1.style.opacity = "1"
    player1.style.animation = "jedagjedug 1s infinite"
    player2.style.opacity = ".5"
    player2.style.animation = "none"
  }
  
  if (count >= 8) {
    result.innerHTML = "<h2>T I E</h2>"
    repeat.style.display = "block"
    player1.style.animation = "none"
    player2.style.animation = "none"
    for(i = 0; i <= 8; i++) {
      boxes[i].removeAttribute("onclick")
    }
  }
  
  indexList.push([row, col])
  board[row][col] = player
  boxes[idxBox].innerHTML = player
  
  winner = checkWinner(board, sym1, sym2)
  if (winner == "1") {
    result.innerHTML = "<h2>PLAYER 1 WIN</h2>"
    repeat.style.display = "block"
    player1.style.animation = "none"
    player2.style.animation = "none"
    for(i = 0; i <= 8; i++) {
      boxes[i].removeAttribute("onclick")
    }
  } else if (winner == "2") {
    result.innerHTML = "<h2>PLAYER 2 WIN</h2>"
    repeat.style.display = "block"
    player1.style.animation = "none"
    player2.style.animation = "none"
    for(j = 0; j <= 8; j++) {
      boxes[j].removeAttribute("onclick")
    }
  }
  
  console.log(count)
  count++
  
}

// Check if there is a winner
function checkWinner(board, sym1, sym2) {
  
  // Horizontal
  for (i = 0; i < 3; i++) {
    if (board[i][0] == sym1 && board[i][1] == sym1 && board[i][2] == sym1) {
      return "1"

    }
    if (board[i][0] == sym2 && board[i][1] == sym2 && board[i][2] == sym2) {
      return "2"
    }
  }
  
  // Vertical
  for (i = 0; i < 3; i++) {
    if (board[0][i] == sym1 && board[1][i] == sym1 && board[2][i] == sym1) {
      return "1"

    }
    if (board[0][i] == sym2 && board[1][i] == sym2 && board[2][i] == sym2) {
      return "2"
    }
  }
  
  // Diagonal
  if (board[0][0] == sym1 && board[1][1] == sym1 && board[2][2] == sym1) {
    return "1"
  }
  else if (board[0][0] == sym2 && board[1][1] == sym2 && board[2][2] == sym2) {
    return "2"
  }
  else if (board[0][2] == sym1 && board[1][1] == sym1 && board[2][0] == sym1) {
    return "1"
  }
  else if (board[0][2] == sym2 && board[1][1] == sym2 && board[2][0] == sym2) {
    return "2"
  }
}