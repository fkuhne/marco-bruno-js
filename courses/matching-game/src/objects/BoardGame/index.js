import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";
import { cards } from "./data";

function BoardGame(amountCards) {
  const flipAndHideCards = active_cards => {
    active_cards.forEach(card => card.classList.remove("-active"));
  }

  const togglePlayer = () => {
    const $arrowDown = document.querySelector(".arrow-down")
    const currentPlayer = $arrowDown.getAttribute("data-currentPlayer")
    $arrowDown.setAttribute("data-currentPlayer", currentPlayer === "1" ? "2" : "1")  
  }

  window.boardGame = {};
  window.boardGame.handleClick = () => {
    
    const $boardGame = document.querySelector(".board-game")
    const $activeCards = $boardGame.querySelectorAll(".card-front-back.-active") 

    if($activeCards.length === 2) {
      setTimeout(() => {
        flipAndHideCards($activeCards)
        togglePlayer()
      }, "900");
    }
  }

  let $htmlCardsList = cards.map(card => CardFrontBack(card.icon, card.altIcon))
  $htmlCardsList = $htmlCardsList.join('')

  return /*html*/ `
    <section class="board-game" onClick="boardGame.handleClick()">
      ${$htmlCardsList}
    </section>
  `;
}

export default BoardGame;
