const gameBoard = (function () {
  const items = ["", "", "", "", "", "", "", "", ""];

  const getItems = () => items;
  const setItems = (index, player) => items.splice(index, 1, player);

  return { getItems, setItems };
})();

function players(name, weapon) {
  const player = { name: "", weapon: "" };
  const getPlayerName = () => player.name;
  const getPlayerWeapon = () => player.weapon;
  const setPlayer = () => ((player.weapon = weapon), (player.name = name));

  return { getPlayerName, getPlayerWeapon, setPlayer };
}

function game(playerOneMove, playerTwoMove) {
  const playerOne = players("Hendrik", "X");
  const playerTwo = players("Uwe", "O");
  playerOne.setPlayer();
  playerTwo.setPlayer();

  gameBoard.setItems(playerOneMove, playerOne.getPlayerWeapon());
  gameBoard.setItems(playerTwoMove, playerTwo.getPlayerWeapon());

  const [i1, i2, i3, i4, i5, i6, i7, i8, i9] = gameBoard.getItems();

  switch (true) {
    case i1 && i2 && i3 === "O":
      console.log(`${playerTwo.getPlayerName()} wins`);
      break;
    case i1 && i2 && i3 === "X":
      console.log(`${playerOne.getPlayerName()} wins`);
  }

  return { playerOne, playerTwo };
}

console.log(gameBoard.getItems());
