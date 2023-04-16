import "./styles.css";
import arrowDownSvg from "../../../images/IconArrowDown.svg";

function ArrowDown(currentPlayer = 1) {
    return /*html*/ `
        <img
          class="arrow-down"
          data-currentPlayer="${currentPlayer}"
          src=${arrowDownSvg} 
          alt="arrow down" 
        />
    `;
}

export default ArrowDown;
