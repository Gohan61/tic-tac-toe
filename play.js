let roundCount = 0;
const form = document.querySelector("#playerInfo");

const gameBoard = (function () {
  const items = ["", "", "", "", "", "", "", "", ""];

  const getItems = () => items;
  const setItems = (index, player) => items.splice(index, 1, player);
  const clearBoard = () => items.forEach((element, i) => (items[i] = ""));

  return { getItems, setItems, clearBoard };
})();

function players(name, weapon) {
  const player = { name: "", weapon: "" };
  const getPlayerName = () => player.name;
  const getPlayerWeapon = () => player.weapon;
  const setPlayer = () => ((player.weapon = weapon), (player.name = name));

  return { getPlayerName, getPlayerWeapon, setPlayer };
}

const playerInfo = function () {
  let playerOne = undefined;
  let playerTwo = undefined;

  let currentWeapon = playerInfo.playerOne.getPlayerWeapon();
  return { playerOne, playerTwo, currentWeapon };
};

form.addEventListener("click", (e) => {
  e.preventDefault();
  const playerOneInput = document.querySelector("#playerOne");
  const playerTwoInput = document.querySelector("#playerTwo");

  playerInfo.playerOne = players(playerOneInput.value, "x");
  playerInfo.playerOne.setPlayer();

  playerInfo.playerTwo = players(playerTwoInput.value, "o");
  playerInfo.playerTwo.setPlayer();
  playerInfo();
  display();
});

function game(playerOneMove, playerTwoMove) {
  roundCount++;

  if (playerOneMove !== undefined) {
    gameBoard.setItems(playerOneMove, playerInfo.playerOne.getPlayerWeapon());
  }
  if (playerTwoMove !== undefined) {
    gameBoard.setItems(playerTwoMove, playerInfo.playerTwo.getPlayerWeapon());
  }

  const [i1, i2, i3, i4, i5, i6, i7, i8, i9] = gameBoard.getItems();

  switch (true) {
    case i1 === "x" && i2 === "x" && i3 === "x":
      console.log(`${playerInfo.playerOne.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case i1 === "o" && i2 === "o" && i3 === "o":
      console.log(`${playerInfo.playerTwo.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case i4 === "x" && i5 === "x" && i6 === "x":
      console.log(`${playerInfo.playerOne.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case i4 === "o" && i5 === "o" && i6 === "o":
      console.log(`${playerInfo.playerTwo.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case i7 === "x" && i8 === "x" && i9 === "x":
      console.log(`${playerInfo.playerOne.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case i7 === "o" && i8 === "o" && i9 === "o":
      console.log(`${playerInfo.playerTwo.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case i1 === "x" && i4 === "x" && i7 === "x":
      console.log(`${playerInfo.playerOne.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case i1 === "o" && i4 === "o" && i7 === "o":
      console.log(`${playerInfo.playerTwo.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case i2 === "x" && i5 === "x" && i8 === "x":
      console.log(`${playerInfo.playerOne.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case i2 === "o" && i5 === "o" && i8 === "o":
      console.log(`${playerInfo.playerTwo.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case i3 === "x" && i6 === "x" && i9 === "x":
      console.log(`${playerInfo.playerOne.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case i3 === "o" && i6 === "o" && i9 === "o":
      console.log(`${playerInfo.playerTwo.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case i1 === "x" && i5 === "x" && i9 === "x":
      console.log(`${playerInfo.playerOne.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case i1 === "o" && i5 === "o" && i9 === "o":
      console.log(`${playerInfo.playerTwo.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case i3 === "x" && i5 === "x" && i7 === "x":
      console.log(`${playerInfo.playerOne.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case i3 === "o" && i5 === "o" && i7 === "o":
      console.log(`${playerInfo.playerTwo.getPlayerName()} wins`);
      gameBoard.clearBoard("");
      break;
    case roundCount === 9:
      console.log("Draw");
      gameBoard.clearBoard("");
  }
}

const display = function itemsOnDisplay() {
  // let currentPlayer = playerInfo.playerOne.getPlayerName();
  const gameBoardDisplay = document.querySelectorAll(".boardItem");

  const listenClick = gameBoardDisplay.forEach((el) =>
    el.addEventListener("click", () => {
      if (el.textContent !== "") {
      } else if (el.textContent === "" && playerInfo.currentWeapon === "x") {
        el.textContent = playerInfo.currentWeapon;
        game(parseInt(el.getAttribute("index")), undefined);
        playerInfo.currentWeapon = playerInfo.playerTwo.getPlayerWeapon();
      } else {
        el.textContent = playerInfo.currentWeapon;
        game(undefined, parseInt(el.getAttribute("index")));
        playerInfo.currentWeapon = playerInfo.playerOne.getPlayerWeapon();
      }
    })
  );
};

console.log(gameBoard.getItems());
