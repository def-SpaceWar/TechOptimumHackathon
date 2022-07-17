// Make little popup shop.
// You wont be able to buy anything, and 3 pfps to buy
// The other 2 will say buy, and the first one will say OWNED
// Parent and child have different set of 3 pfps
// Price tag will be like 2000, 5000 for second and third.
// NO INCREASING COINS, just aesthetic shop really.

import steveUrl from './steve.png';
import amogusUrl from './amogus.png';
import fallguysUrl from './fallguys.png';

import scissorsUrl from './scissors.png';
import pencilUrl from './pencil.png';
import protractorUrl from './protractor.png';

export class ChildShop extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="added-flex">
        <div class="div-border" id="steve-card">Steve
          <img id="steve-image" src="${steveUrl}", alt="minecraft-steve">
          <h1 id="steve-h1">Owned</h1>
        </div>
        <div class="div-border" id="amogus-card">Amogus
          <img id="amogus-image" src="${amogusUrl}">
          <h1 id="amogus-h1">2,000</h1>
        </div>
        <div class="div-border" id="fall-card">Fall Guys
          <img id="fallguys-image" src="${fallguysUrl}", alt="fallguys">
          <h1 id="fallguys-h1">5,000</h1>

      </div>
    `;
  }
}

export class AdultShop extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="added-flex">
        <div class="div-border" id="scissors-card">Scissors
          <img id="scissors-image" src="${scissorsUrl}",alt="scissors">
          <h1 id="scissors-h1">Owned</h1>
        </div>
        <div class="div-border" id="pencil-card">Pencil
          <img id="pencil-image" src="${pencilUrl}",alt="pencil">
          <h1 id="pencil-h1">2,000</h1>
        </div>
        <div class="div-border" id="protractor-card">Protractor
          <img id="protractor-image" src="${protractorUrl}",alt="protractor">
          <h1 id="protractor-h1">5,000</h1>
        </div>
      </div>
    `;
  }
}