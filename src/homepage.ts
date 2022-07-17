import './style.css';
import coinUrl from './goldcoin2.png';
import { setupButtons } from './readyUpButton';
import { ChildShop, AdultShop } from './shop';
import steveUrl from './steve.png';
import scissorsUrl from './scissors.png';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="child-view">
    <h1 class="title">Child Side</h1>

    <span id="child-pfp">
      <img id="steve-pfp" src="${steveUrl}", alt="steve">
    </span>

    <button class="btn-shop green">SHOP</button>

    <div class="top-currency">
      <h1>1500</h1>

      <div class="coin">
        <img src="${coinUrl}">
      </div>
    </div>
  </div>
  
  <div id="parent-view">
    <h1 class="title">Parent Side</h1>
      
    <span id="parent-pfp">
      <img id="scissors-pfp" src="${scissorsUrl}", alt="scissors">
    </span>
      
    <button class="btn-shop orange">SHOP</button>

    <div class="top-currency">
      <h1>1500</h1>

      <div class="coin">
        <img src="${coinUrl}">
      </div>
    </div>
  </div>
  
  <button id="btn-1">Ready <span class="btn-tooltip">press a</span></button>
  <button id="btn-2"> Up<span class="btn-tooltip">press l</span></button>
`;

setupButtons();

// <child-shop></child-shop> Is how this is put in html
customElements.define("child-shop", ChildShop);
customElements.define("adult-shop", AdultShop);

const shopButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".btn-shop")!;

let childShopOpen = false;
function toggleChildShop() {
  if (childShopOpen) {
    const childShop: ChildShop = document.querySelector("child-shop")!;
    childShop.style.opacity = "0";
    shopButtons[0].disabled = true;
    
    setTimeout(() => {
      childShop.remove();
      childShopOpen = false;
      shopButtons[0].disabled = false;
    }, 750)
  } else {
    document.querySelector("#child-view")!.insertAdjacentHTML("beforeend", "<child-shop></child-shop>");
    childShopOpen = true;
  }
}

shopButtons[0].onclick = toggleChildShop;

let parentShopOpen = false;
function toggleParentShop() {
  console.log(parentShopOpen);
  if (parentShopOpen) {
    const adultShop: AdultShop = document.querySelector("adult-shop")!;
    adultShop.style.opacity = "0";
    shopButtons[1].disabled = true;
    
    setTimeout(() => {
      adultShop.remove();
      parentShopOpen = false;
      shopButtons[1].disabled = false;
    }, 750);
  } else {
    document.querySelector("#parent-view")!.insertAdjacentHTML("beforeend", "<adult-shop></adult-shop>");
    parentShopOpen = true;
  }
}

shopButtons[1].onclick = toggleParentShop;