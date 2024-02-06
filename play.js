let roundCount = 0;
const form = document.querySelector("#playerInfo");
const submitButton = document.querySelector("button[type='submit']");

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

function playerDetails() {
  let playerOne = undefined;
  let playerTwo = undefined;

  let currentWeapon = "x";
  const getCurrentWeapon = () => currentWeapon;
  const setCurrentWeaponOne = () =>
    (currentWeapon = playerInfo.playerOne.getPlayerWeapon());
  const setCurrentWeaponTwo = () =>
    (currentWeapon = playerInfo.playerTwo.getPlayerWeapon());
  return {
    playerOne,
    playerTwo,
    getCurrentWeapon,
    setCurrentWeaponTwo,
    setCurrentWeaponOne,
  };
}

const playerInfo = playerDetails();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const displayItems = getDisplay.getGameBoardDisplay();
  displayItems.forEach((el) => (el.textContent = ""));
  gameBoard.clearBoard();
  const winner = getGameWinner.getWinner();
  winner.textContent = "";
  roundCount = 0;

  const playerOneInput = document.querySelector("#playerOne");
  const playerTwoInput = document.querySelector("#playerTwo");

  playerInfo.playerOne = players(playerOneInput.value, "x");
  playerInfo.playerOne.setPlayer();

  playerInfo.playerTwo = players(playerTwoInput.value, "o");
  playerInfo.playerTwo.setPlayer();

  playerInfo.getCurrentWeapon();

  getDisplay.items();
});

function game(playerOneMove, playerTwoMove) {
  const winner = document.querySelector(".winner");
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
      winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case i1 === "o" && i2 === "o" && i3 === "o":
      winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case i4 === "x" && i5 === "x" && i6 === "x":
      winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case i4 === "o" && i5 === "o" && i6 === "o":
      winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case i7 === "x" && i8 === "x" && i9 === "x":
      winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case i7 === "o" && i8 === "o" && i9 === "o":
      winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case i1 === "x" && i4 === "x" && i7 === "x":
      winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case i1 === "o" && i4 === "o" && i7 === "o":
      winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case i2 === "x" && i5 === "x" && i8 === "x":
      winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case i2 === "o" && i5 === "o" && i8 === "o":
      winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case i3 === "x" && i6 === "x" && i9 === "x":
      winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case i3 === "o" && i6 === "o" && i9 === "o":
      winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case i1 === "x" && i5 === "x" && i9 === "x":
      winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case i1 === "o" && i5 === "o" && i9 === "o":
      winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case i3 === "x" && i5 === "x" && i7 === "x":
      winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case i3 === "o" && i5 === "o" && i7 === "o":
      winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
      gameBoard.clearBoard("");
      getDisplay.remove();
      break;
    case roundCount === 9:
      winner.textContent = "Draw";
      gameBoard.clearBoard("");
      getDisplay.remove();
  }
  const getWinner = () => winner;
  return { getWinner };
}

const getGameWinner = game();

function display() {
  const gameBoardDisplay = document.querySelectorAll(".boardItem");

  const items = () =>
    gameBoardDisplay.forEach((el) =>
      el.addEventListener("click", changeDisplayItems)
    );

  function changeDisplayItems() {
    if (this.textContent !== "") {
    } else if (
      this.textContent === "" &&
      playerInfo.getCurrentWeapon() === "x"
    ) {
      this.textContent = playerInfo.getCurrentWeapon();
      game(parseInt(this.getAttribute("index")), undefined);
      playerInfo.setCurrentWeaponTwo();
    } else {
      this.textContent = playerInfo.getCurrentWeapon();
      game(undefined, parseInt(this.getAttribute("index")));
      playerInfo.setCurrentWeaponOne();
    }
  }

  const remove = () =>
    gameBoardDisplay.forEach((el) =>
      el.removeEventListener("click", changeDisplayItems)
    );

  const getGameBoardDisplay = () => gameBoardDisplay;
  return { remove, items, getGameBoardDisplay };
}

const getDisplay = display();

console.log(gameBoard.getItems());
