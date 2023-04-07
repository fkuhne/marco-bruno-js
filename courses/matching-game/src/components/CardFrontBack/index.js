import "./style.css";
import CardGame from "../CardGame";

function CardFrontBack() {
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) => {
        event.target.closest('.card-front-back').classList.toggle("-active");
    }
    return /*html*/ `
        <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame("logo-javascript", "Logo do Javascript")}
            </div>
        </article>
    `;
}

export default CardFrontBack