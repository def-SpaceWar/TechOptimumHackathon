import './style.css';
import coinUrl from './goldcoin2.png';
import steveUrl from './steve.png';
import scissorsUrl from './scissors.png';
import { fadeButtons } from './readyUpButton';
import questionGroup, { Question } from './questions';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="child-view">
    <h1 class="small-title">Child Side</h1>

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

    <p id="child-points">Points: 0</p>

    <p id="winner"></p>
  </div>
  
  <div id="parent-view">
    <h1 class="small-title">Parent Side</h1>

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

    <p id="parent-points">Points: 0</p>

    <a id="back-to-home" href="/"></a>
  </div>

  <button id="btn-1">Ready </button>
  <button id="btn-2"> Up</button>

  <div class="flex">
    <div id="child-card">
      <span id="child-question">Child's View</span>
      <br />
      <span>Topic: <span id="child-topic">Child's View</span></span>
      <br />
      <span>Grade Level: <span id="child-difficulty">Child's View</span></span>
      <br />
      <ol id="child-options">
        <li>Press A: <span id="child-option-1">Child Option #1</span></li>
        <li>Press S: <span id="child-option-2">Child Option #2</span></li>
        <li>Press D: <span id="child-option-3">Child Option #3</span></li>
        <li>Press F: <span id="child-option-4">Child Option #4</span></li>
      </ol>
    </div>

    <div id="parent-card">
      <span id="parent-question">Parent's View</span>
      <br />
      <span>Topic: <span id="parent-topic">Parent's View</span></span>
      <br />
      <span>Difficulty: <span id="parent-difficulty">Parent's View</span></span>
      <br />
      <ol id="parent-options">
        <li>Press H: <span id="parent-option-1">Parent Option #1</span></li>
        <li>Press J: <span id="parent-option-2">Parent Option #2</span></li>
        <li>Press K: <span id="parent-option-3">Parent Option #3</span></li>
        <li>Press L: <span id="parent-option-4">Parent Option #4</span></li>
      </ol>
    </div>
  </div>
`;

setTimeout(() => {  
  const titles = document.querySelectorAll(".small-title");
  let cRemoved = 0;
  const lowerTitleCharacterCount = setInterval(() => {
    for (let i = 0; i < titles.length; i++) {
      titles[i].innerHTML = titles[i].innerHTML.slice(0, titles[i].innerHTML.length - 1);
    }
    cRemoved++;
  
    if (cRemoved >= 5) {
      clearInterval(lowerTitleCharacterCount);
    }
  }, 200);
}, 1000)

fadeButtons();

function selectRandomFromArray(array: any[]) {
  try {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  } catch {
    return array[array.length - 1];
  }
}

function shuffleArray(arr: any[]) {
  const newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
}

let childQuestionCount = 0;
let adultQuestionCount = 0;

function showQuestion(question: Question) {
  if (adultQuestionCount < 0) adultQuestionCount = 0;
  if (childQuestionCount < 0) childQuestionCount = 0;
  document.querySelector("#parent-points")!.innerHTML = "Points: " + adultQuestionCount.toString();
  document.querySelector("#child-points")!.innerHTML = "Points: " + childQuestionCount.toString();
  
  if (question.adult) {
    document.querySelector("#parent-question")!.innerHTML = question.question;
    document.querySelector("#parent-topic")!.innerHTML = question.topic;
    document.querySelector("#parent-difficulty")!.innerHTML = question.gradeLevel.toString();

    // mix options
    const newOptions = shuffleArray(question.options);
    document.querySelector("#parent-option-1")!.innerHTML = newOptions[0];
    document.querySelector("#parent-option-2")!.innerHTML = newOptions[1];
    document.querySelector("#parent-option-3")!.innerHTML = newOptions[2];
    document.querySelector("#parent-option-4")!.innerHTML = newOptions[3];
  } else {
    document.querySelector("#child-question")!.innerHTML = question.question;
    document.querySelector("#child-topic")!.innerHTML = question.topic;
    
    switch (question.gradeLevel) {
      case 0:
        document.querySelector("#child-difficulty")!.innerHTML = "K";
        break;
      default:
        document.querySelector("#child-difficulty")!.innerHTML = question.gradeLevel.toString();
        break;
    }

    // mix options
    const newOptions = shuffleArray(question.options);
    document.querySelector("#child-option-1")!.innerHTML = newOptions[0];
    document.querySelector("#child-option-2")!.innerHTML = newOptions[1];
    document.querySelector("#child-option-3")!.innerHTML = newOptions[2];
    document.querySelector("#child-option-4")!.innerHTML = newOptions[3];
  }
}

function selectOption(adult: boolean, optionNum: number): string {
  return document.querySelector(`#${adult ? "parent" : "child"}-option-${optionNum}`)!.innerHTML;
}

function checkAnswer(option: string, question: Question): boolean {
  if (option == question.options[0]) return true;
  return false;
}

function runQuiz() {
  let childQuestion = selectRandomFromArray(questionGroup.filter({ adult: false }));
  showQuestion(childQuestion);
  
  let adultQuestion = selectRandomFromArray(questionGroup.filter({ adult: true }));
  showQuestion(adultQuestion);

  let finished = false;
  function updater(e) {
    if (finished) return;
    
    let adult = false;
    let option = "";
    
    if (e.key == "a") {
      option = selectOption(false, 1);
    } else if (e.key == "s") {
      option = selectOption(false, 2);
    } else if (e.key == "d") {
      option = selectOption(false, 3);
    } else if (e.key == "f") {
      option = selectOption(false, 4);
    } else if (e.key == "h") {
      adult = true;
      option = selectOption(true, 1);
    } else if (e.key == "j") {
      adult = true;
      option = selectOption(true, 2);
    } else if (e.key == "k") {
      adult = true;
      option = selectOption(true, 3);
    } else if (e.key == "l") {
      adult = true;
      option = selectOption(true, 4);
    }

    if (option != "") {
      if (adult) {
        if (checkAnswer(option, adultQuestion)) {
          adultQuestionCount++;
          adultQuestion = selectRandomFromArray(questionGroup.filter({ adult: true }));
          showQuestion(adultQuestion);
          checkIfWin();
        } else {
          adultQuestionCount--;
        }
      } else {
        if (checkAnswer(option, childQuestion)) {
          childQuestionCount++;
          childQuestion = selectRandomFromArray(questionGroup.filter({ adult: false }));
          showQuestion(childQuestion);
        } else {
          childQuestionCount--;
          checkIfWin();
        }
      }
    }
  }

  function checkIfWin() {
    if (adultQuestionCount >= 20) {
      finished = true;
      document.querySelector("#winner")!.innerHTML = "The PARENT has WON!"; 
      document.querySelector("#back-to-home")!.innerHTML = "Back to home!";
      document.querySelector(".flex")!.remove();
    } else if (childQuestionCount >= 20) {
      finished = true;
      document.querySelector("#winner")!.innerHTML = "The CHILD has WON!"; 
      document.querySelector("#back-to-home")!.innerHTML = "Back to home!";
      document.querySelector(".flex")!.remove();
    }
  }
  
  document.addEventListener("keydown", updater);
}

runQuiz();