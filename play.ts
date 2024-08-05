let roundCount: number = 0;
const form: HTMLFormElement | null = document.querySelector("#playerInfo");
const submitButton: HTMLButtonElement | null = document.querySelector(
  "button[type='submit']"
);

const gameBoard = (function () {
  const items: string[] = ["", "", "", "", "", "", "", "", ""];

  const getItems = (): string[] => items;
  const setItems = (index: number, player: string) =>
    items.splice(index, 1, player);
  const clearBoard = (): void => items.forEach((element, i) => (items[i] = ""));

  return { getItems, setItems, clearBoard };
})();

interface playerObject {
  name: string;
  weapon: string;
}

function players(name: string, weapon: string) {
  const player: playerObject = { name: "", weapon: "" };
  const getPlayerName = (): string => player.name;
  const getPlayerWeapon = (): string => player.weapon;
  const setPlayer = () => ((player.weapon = weapon), (player.name = name));

  return { getPlayerName, getPlayerWeapon, setPlayer };
}

interface playersDetails {
  playerOne: any;
  playerTwo: any;
  getCurrentWeapon: any;
  setCurrentWeaponOne: any;
  setCurrentWeaponTwo: any;
}

function playerDetails() {
  let playerOne;
  let playerTwo;

  let currentWeapon: string = "x";
  const getCurrentWeapon = (): string => currentWeapon;
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

const playerInfo: playersDetails = playerDetails();

if (form && submitButton) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const displayItems = getDisplay.getGameBoardDisplay();
    displayItems.forEach((el: HTMLButtonElement) => (el.textContent = ""));
    gameBoard.clearBoard();
    if (getGameWinner.getWinner) {
      const winner = getGameWinner.getWinner();
      if (winner) {
        winner.textContent = "";
      }
    }

    roundCount = 0;

    const playerOneInput: HTMLInputElement | null =
      document.querySelector("#playerOne");
    const playerTwoInput: HTMLInputElement | null =
      document.querySelector("#playerTwo");

    if (playerOneInput && playerTwoInput) {
      playerInfo.playerOne = players(playerOneInput.value, "x");
      playerInfo.playerOne.setPlayer();

      playerInfo.playerTwo = players(playerTwoInput.value, "o");
      playerInfo.playerTwo.setPlayer();
    }

    playerInfo.getCurrentWeapon();

    getDisplay.items();
  });
}

function game(
  playerOneMove: number | undefined,
  playerTwoMove: number | undefined
) {
  const winner: HTMLParagraphElement | null = document.querySelector(".winner");
  roundCount++;

  if (playerOneMove !== undefined) {
    gameBoard.setItems(playerOneMove, playerInfo.playerOne.getPlayerWeapon());
  }
  if (playerTwoMove !== undefined) {
    gameBoard.setItems(playerTwoMove, playerInfo.playerTwo.getPlayerWeapon());
  }

  const [i1, i2, i3, i4, i5, i6, i7, i8, i9] = gameBoard.getItems();

  if (winner) {
    switch (true) {
      case i1 === "x" && i2 === "x" && i3 === "x":
        winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case i1 === "o" && i2 === "o" && i3 === "o":
        winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case i4 === "x" && i5 === "x" && i6 === "x":
        winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case i4 === "o" && i5 === "o" && i6 === "o":
        winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case i7 === "x" && i8 === "x" && i9 === "x":
        winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case i7 === "o" && i8 === "o" && i9 === "o":
        winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case i1 === "x" && i4 === "x" && i7 === "x":
        winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case i1 === "o" && i4 === "o" && i7 === "o":
        winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case i2 === "x" && i5 === "x" && i8 === "x":
        winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case i2 === "o" && i5 === "o" && i8 === "o":
        winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case i3 === "x" && i6 === "x" && i9 === "x":
        winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case i3 === "o" && i6 === "o" && i9 === "o":
        winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case i1 === "x" && i5 === "x" && i9 === "x":
        winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case i1 === "o" && i5 === "o" && i9 === "o":
        winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case i3 === "x" && i5 === "x" && i7 === "x":
        winner.textContent = `${playerInfo.playerOne.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case i3 === "o" && i5 === "o" && i7 === "o":
        winner.textContent = `${playerInfo.playerTwo.getPlayerName()} wins`;
        gameBoard.clearBoard();
        getDisplay.remove();
        break;
      case roundCount === 9:
        winner.textContent = "Draw";
        gameBoard.clearBoard();
        getDisplay.remove();
    }
  }
  const getWinner = () => winner;
  return { getWinner };
}

const getGameWinner = game(undefined, undefined);

function display() {
  const gameBoardDisplay: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".boardItem");

  const items = (): void =>
    gameBoardDisplay.forEach((el) =>
      el.addEventListener("click", changeDisplayItems)
    );

  function changeDisplayItems(): void {
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

  const remove = (): void =>
    gameBoardDisplay.forEach((el) =>
      el.removeEventListener("click", changeDisplayItems)
    );

  const getGameBoardDisplay = () => gameBoardDisplay;
  return { remove, items, getGameBoardDisplay };
}

interface displayObject {
  remove: any;
  items: any;
  getGameBoardDisplay: any;
}

const getDisplay: displayObject = display();
