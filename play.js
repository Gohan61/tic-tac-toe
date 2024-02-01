let roundCount = 0;

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

const playerOne = players("Hendrik", "x");
playerOne.setPlayer();
const playerTwo = players("Uwe", "o");
playerTwo.setPlayer();

function game(playerOneMove, playerTwoMove) {
  if (!(Number.isInteger(playerOneMove) && Number.isInteger(playerTwoMove))) {
    console.log("Please enter a valid number");
  } else {
    roundCount++;

    gameBoard.setItems(playerOneMove, playerOne.getPlayerWeapon());
    gameBoard.setItems(playerTwoMove, playerTwo.getPlayerWeapon());

    const [i1, i2, i3, i4, i5, i6, i7, i8, i9] = gameBoard.getItems();

    switch (true) {
      case i1 === "x" && i2 === "x" && i3 === "x":
        console.log(`${playerOne.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case i1 === "o" && i2 === "o" && i3 === "o":
        console.log(`${playerTwo.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case i4 === "x" && i5 === "x" && i6 === "x":
        console.log(`${playerOne.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case i4 === "o" && i5 === "o" && i6 === "o":
        console.log(`${playerTwo.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case i7 === "x" && i8 === "x" && i9 === "x":
        console.log(`${playerOne.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case i7 === "o" && i8 === "o" && i9 === "o":
        console.log(`${playerTwo.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case i1 === "x" && i4 === "x" && i7 === "x":
        console.log(`${playerOne.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case i1 === "o" && i4 === "o" && i7 === "o":
        console.log(`${playerTwo.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case i2 === "x" && i5 === "x" && i8 === "x":
        console.log(`${playerOne.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case i2 === "o" && i5 === "o" && i8 === "o":
        console.log(`${playerTwo.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case i3 === "x" && i6 === "x" && i9 === "x":
        console.log(`${playerOne.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case i3 === "o" && i6 === "o" && i9 === "o":
        console.log(`${playerTwo.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case i1 === "x" && i5 === "x" && i9 === "x":
        console.log(`${playerOne.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case i1 === "o" && i5 === "o" && i9 === "o":
        console.log(`${playerTwo.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case i3 === "x" && i5 === "x" && i7 === "x":
        console.log(`${playerOne.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case i3 === "o" && i5 === "o" && i7 === "o":
        console.log(`${playerTwo.getPlayerName()} wins`);
        gameBoard.clearBoard("");
        break;
      case roundCount === 3:
        console.log("Draw");
        gameBoard.clearBoard("");
    }
  }
}

console.log(gameBoard.getItems());
