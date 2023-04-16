import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";
import { cards } from "./data";

function BoardGame(amountCards) {

  let $htmlCardsList = cards.map(card => CardFrontBack(card.icon, card.altIcon))
  $htmlCardsList = $htmlCardsList.join('')

  return /*html*/ `
    <section class="board-game">
      ${$htmlCardsList}
    </section>
  `;
}

export default BoardGame;
