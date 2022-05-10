let container = document.createElement("div");
container.classList.add("container");
let allLettersEng = "abcdefghijklmnopqrstuvwxyz.1234567890[];,'\\`-=~!@#$%^&*()_+";
let allLettersRu = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя.1234567890[];,'\\-=~!@#$%^&*()_+";
let about = document.createElement("div");
about.classList.add("about");
document.body.append(container);
let keyBoardBlock = document.createElement("div");
let firstRow = document.createElement("div");
let secondRow = document.createElement("div");
let thirdRow = document.createElement("div");
let fourthRow = document.createElement("div");
let fifthRow = document.createElement("div");
let textArea = document.createElement("textarea");
let allRows = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];
textArea.style.resize = "none";
textArea.setAttribute("spellcheck", "false");
keyBoardBlock.classList.add("keyBoardBlock");
container.append(textArea);
container.append(keyBoardBlock);
container.append(about);
about.innerHTML =
  "Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: левыe Ctrl + Alt";
keyBoardBlock.append(firstRow);
keyBoardBlock.append(secondRow);
keyBoardBlock.append(thirdRow);
keyBoardBlock.append(fourthRow);
keyBoardBlock.append(fifthRow);
firstRow.classList.add("firstRow");
secondRow.classList.add("secondRow");
thirdRow.classList.add("thirdRow");
fourthRow.classList.add("fourthRow");
fifthRow.classList.add("fifthRow");
let firstRowButtonsEng = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
];
let secondRowButtonsEng = [
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
  "Del",
];
let thirdRowButtonsEng = [
  "CapsLock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
];
let fourthRowButtonsEng = [
  "Shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",

  "&#9650",
  "Shift",
];
let fifthRowButtonsEng = [
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "&#9668",
  "&#9660",
  "&#9658",
  "Ctrl",
];
let firstRowButtonsRu = [
  "ё",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
];
let secondRowButtonsRu = [
  "Tab",
  "й",
  "ц",
  "у",
  "к",
  "е",
  "н",
  "г",
  "ш",
  "щ",
  "з",
  "х",
  "ъ",
  "\\",
  "Del",
];
let thirdRowButtonsRu = [
  "CapsLock",
  "ф",
  "ы",
  "в",
  "а",
  "п",
  "р",
  "о",
  "л",
  "д",
  "ж",
  "э",
  "Enter",
];
let fourthRowButtonsRu = [
  "Shift",
  "я",
  "ч",
  "с",
  "м",
  "и",
  "т",
  "ь",
  "б",
  "ю",

  "&#9650",
  "Shift",
];
let fifthRowButtonsRu = [
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "&#9668",
  "&#9660",
  "&#9658",
  "Ctrl",
];
let firstRowShift = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
];
let firstRowNoShift = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
];
function showButtons(r1, r2, r3, r4, r5) {
  for (let i = 0; i < 62; i++) {
    let button = document.createElement("button");
    button.name = "btn";
    if (i < 14) {
      firstRow.append(button);
      button.innerHTML = r1[i];
      if (i != 13) {
        button.classList.add("default-btn");
      } else {
        button.classList.add("rare-btn");
      }
    } else if (i > 13 && i < 29) {
      secondRow.append(button);
      button.innerHTML = r2[i - 14];
      if (i !== 14 && i !== 28) {
        button.classList.add("default-btn");
      } else {
        button.classList.add("rare-btn");
        if (i == 28) {
          button.id = "Delete";
        }
      }
    } else if (i > 28 && i < 42) {
      thirdRow.append(button);
      button.innerHTML = r3[i - 29];
      if (i == 29) {
        button.id = "caps";
      }
      if (i !== 29 && i !== 41) {
        button.classList.add("default-btn");
      } else {
        button.classList.add("rare-btn");
      }
    } else if (i > 41 && i < 54) {
      fourthRow.append(button);
      button.innerHTML = r4[i - 42];
      if (i == 42) {
        button.id = "lShift";
      } else if (i == 53) {
        button.id = "rShift";
      }
      if (i !== 42 && i !== 53 && i !== 52) {
        button.classList.add("default-btn");
      } else {
        button.classList.add("rare-btn");
        if (i == 52) {
          button.id = "ArrowUp";
        }
      }
    } else {
      fifthRow.append(button);
      button.innerHTML = r5[i - 54];
      button.classList.add("rare-btn");
      if (i == 54) {
        button.id = "lControl";
      } else if (i == 56) {
        button.id = "lAlt";
      } else if (r5[i - 54] == "Space") {
        button.classList.add("space-btn");
        button.id = " ";
      } else if (r5[i - 54] == "&#9668") {
        button.id = "ArrowLeft";
      } else if (r5[i - 54] == "&#9660") {
        button.id = "ArrowDown";
      } else if (r5[i - 54] == "&#9658") {
        button.id = "ArrowRight";
      } else if (r5[i - 54] == "Ctrl") {
        button.id = "rControl";
      }
    }
  }
}
let allRowValuesEng = [
  firstRowButtonsEng,
  secondRowButtonsEng,
  thirdRowButtonsEng,
  fourthRowButtonsEng,
  fifthRowButtonsEng,
];
let allRowValuesRu = [
  firstRowButtonsRu,
  secondRowButtonsRu,
  thirdRowButtonsRu,
  fourthRowButtonsRu,
  fifthRowButtonsRu,
];
if (localStorage.lang === "en") {
  showButtons(
    firstRowButtonsEng,
    secondRowButtonsEng,
    thirdRowButtonsEng,
    fourthRowButtonsEng,
    fifthRowButtonsEng
  );
} else if (localStorage.lang == "ru") {
  showButtons(
    firstRowButtonsRu,
    secondRowButtonsRu,
    thirdRowButtonsRu,
    fourthRowButtonsRu,
    fifthRowButtonsRu
  );
} else {
  localStorage.setItem("lang", "en");
  showButtons(
    firstRowButtonsEng,
    secondRowButtonsEng,
    thirdRowButtonsEng,
    fourthRowButtonsEng,
    fifthRowButtonsEng
  );
}
