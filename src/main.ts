// getting css
import './style.css';

// grabbing coin image
import coinUrl from './coin.png';

/* 
HTML for Child and Parent View 
*/
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="child-view">
    <h1>Child Side</h1>

    <span id="child-pfp"></span>

    <div class="top-currency">
      <h1>1500</h1>

      <div class="coin">
        <img src="${coinUrl}">
      </div>
    </div>
  </div>
  
  <div id="parent-view">
    <h1>Parent Side</h1>

    <span id="parent-pfp"></span>

    <div class="top-currency">
      <h1>1500</h1>

      <div class="coin">
        <img src="${coinUrl}">
      </div>
    </div>
  </div>

  <button class="btn-1">Ready </button>
  <button class="btn-2"> Up</button>
`;