let defaultButtons = document.querySelectorAll(".default-btn");
let rareButtons = document.querySelectorAll(".rare-btn");

textArea.addEventListener("focus", () => {
  textArea.id = "focus";
});

textArea.addEventListener("blur", () => {
  textArea.id = "nofocus";
});

document.addEventListener("keydown", (e) => {
  if (localStorage.lang == "en") {
    if (allLettersEng.includes(e.key.toLowerCase())) {
      if (
        defaultButtons[13].innerHTML == "q" ||
        defaultButtons[13].innerHTML == "й"
      ) {
        if (textArea.id != "focus") {
          textArea.value += e.key;
        }
        defaultButtons.forEach((el) => {
          if (el.innerHTML == e.key.toLowerCase()) {
            el.classList.add("defaultPressed");
          }
        });
      } else {
        if (textArea.id != "focus") {
          textArea.value += e.key.toUpperCase();
        }
        defaultButtons.forEach((el) => {
          if (el.innerHTML == e.key.toUpperCase()) {
            el.classList.add("defaultPressed");
          }
        });
      }
    } else if (allLettersRu.includes(e.key.toLowerCase())) {
      for (let i = 0; i < allRowValuesRu.length; i++) {
        for (let j = 0; j < allRowValuesRu[i].length; j++) {
          if (allRowValuesRu[i][j] == e.key.toLowerCase()) {
            if (
              defaultButtons[13].innerHTML == "q" ||
              defaultButtons[13].innerHTML == "й"
            ) {
              if (textArea.id != "focus") {
                textArea.value += allRowValuesEng[i][j];
              }

              defaultButtons.forEach((el) => {
                if (el.innerHTML == allRowValuesEng[i][j]) {
                  el.classList.add("defaultPressed");
                }
              });
            } else {
              if (textArea.id != "focus") {
                textArea.value += allRowValuesEng[i][j].toUpperCase();
              }
              defaultButtons.forEach((el) => {
                if (el.innerHTML == allRowValuesEng[i][j].toUpperCase()) {
                  el.classList.add("defaultPressed");
                }
              });
            }
          }
        }
      }
    }
  } else {
    if (allLettersRu.includes(e.key.toLowerCase())) {
      if (
        defaultButtons[13].innerHTML == "q" ||
        defaultButtons[13].innerHTML == "й"
      ) {
        if (textArea.id !== "focus") {
          textArea.value += e.key;
        }
        defaultButtons.forEach((el) => {
          if (el.innerHTML == e.key.toLowerCase()) {
            el.classList.add("defaultPressed");
          }
        });
      } else {
        if (textArea.id != "focus") {
          textArea.value += e.key.toUpperCase();
        }
        defaultButtons.forEach((el) => {
          if (el.innerHTML == e.key.toUpperCase()) {
            el.classList.add("defaultPressed");
          }
        });
      }
    } else if (allLettersEng.includes(e.key.toLowerCase())) {
      for (let i = 0; i < allRowValuesEng.length; i++) {
        for (let j = 0; j < allRowValuesEng[i].length; j++) {
          if (allRowValuesEng[i][j] == e.key.toLowerCase()) {
            if (
              defaultButtons[13].innerHTML == "q" ||
              defaultButtons[13].innerHTML == "й"
            ) {
              if (textArea.id != "focus") {
                textArea.value += allRowValuesRu[i][j];
              }
              defaultButtons.forEach((el) => {
                if (el.innerHTML == allRowValuesRu[i][j]) {
                  el.classList.add("defaultPressed");
                }
              });
            } else {
              if (textArea.id != "focus") {
                textArea.value += allRowValuesRu[i][j].toUpperCase();
              }
              defaultButtons.forEach((el) => {
                if (el.innerHTML == allRowValuesRu[i][j].toUpperCase()) {
                  el.classList.add("defaultPressed");
                }
              });
            }
          }
        }
      }
    }
  }

  rareButtons.forEach((el) => {
    if (
      el.innerHTML == e.key ||
      el.id == e.key ||
      el.id.substring(1) == e.key
    ) {
      if (
        el.innerHTML == "Ctrl" &&
        e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT
      ) {
        document.getElementById("lControl").classList.add("rarePressed");
      } else if (
        el.innerHTML == "Ctrl" &&
        e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT
      ) {
        document.getElementById("rControl").classList.add("rarePressed");
      } else if (
        e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT &&
        el.innerHTML == "Alt"
      ) {
        document.getElementById("lAlt").classList.add("rarePressed");
      } else if (
        e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT &&
        el.innerHTML == "Alt"
      ) {
        document.getElementById("rAlt").classList.add("rarePressed");
      } else {
        el.classList.add("rarePressed");
        if (textArea.id != "focus") {
          if (el.innerHTML == "Backspace") {
            console.log("back")
            textArea.value = textArea.value.slice(0, -1);
          }
          if (el.innerHTML == "Tab") {
            textArea.value += "    ";
            textArea.setSelectionRange(
              textArea.value.length,
              textArea.value.length
            );
          } else if (
            el.id == "ArrowUp" ||
            el.id == "ArrowRight" ||
            el.id == "ArrowLeft" ||
            el.id == "ArrowDown"
          ) {
            textArea.value += el.innerHTML;
          }
        }
        if (el.innerHTML == "CapsLock") {
          if (
            defaultButtons[13].innerHTML == "q" ||
            defaultButtons[13].innerHTML == "й"
          ) {
            el.classList.remove("rarePressed");
            el.classList.add("caps");
            capsU();
          } else {
            el.classList.remove("caps");
            capsL();
          }
        } else if (el.innerHTML == "Space" && el.id == e.key) {
          textArea.value += " ";
        } else if (el.innerHTML == "Enter") {
          textArea.value += "\n";
        } else if (
          e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT &&
          el.innerHTML == "Shift"
        ) {
          el.classList.remove("rarePressed");
          document.getElementById("lShift").classList.add("caps");
        } else if (
          e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT &&
          el.innerHTML == "Shift"
        ) {
          el.classList.remove("rarePressed");
          document.getElementById("rShift").classList.add("caps");
        }
      }
    }
  });
});
document.addEventListener("keydown", (e) => {
  if (
    e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT &&
    document.getElementById("lControl").classList.value ==
      "rare-btn rarePressed" &&
    document.getElementById("lAlt").classList.value == "rare-btn rarePressed"
  ) {
    if (localStorage.lang == "en") {
      change(allRowValuesEng, allRowValuesRu);
      localStorage.lang = "ru";
    } else {
      change(allRowValuesRu, allRowValuesEng);
      localStorage.lang = "en";
    }
  } else if (
    e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT &&
    document.getElementById("lShift").classList.value == "rare-btn caps"
  ) {
    if (document.getElementById("caps").classList.value == "rare-btn caps") {
      capsL();
    } else {
      capsU();
    }
    if (document.getElementById("lShift").classList.value == "rare-btn caps") {
      addShift();
    }
  } else if (
    e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT &&
    document.getElementById("rShift").classList.value == "rare-btn caps"
  ) {
    if (document.getElementById("caps").classList.value == "rare-btn caps") {
      capsL();
    } else {
      capsU();
    }
    if (document.getElementById("rShift").classList.value == "rare-btn caps") {
      addShift();
    }
  }
});
document.addEventListener("keyup", (e) => {
  if (e.key == " ") {
    document.querySelector(".space-btn").classList.remove("rarePressed");
  }
  defaultButtons.forEach((el) => {
    el.classList.remove("defaultPressed");
  });
  rareButtons.forEach((el) => {
    el.classList.remove("rarePressed");
  });
  if (e.key == "Shift") {
    if (
      defaultButtons[13].innerHTML == "q" ||
      defaultButtons[13].innerHTML == "й"
    ) {
      capsU();
    } else {
      capsL();
    }
    if (document.getElementById("rShift").classList.value == "rare-btn caps") {
      removeShift();
    }
    if (document.getElementById("lShift").classList.value == "rare-btn caps") {
      removeShift();
    }
  }
  if (e.location == KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
    document.getElementById("lShift").classList.remove("caps");
  } else {
    document.getElementById("rShift").classList.remove("caps");
  }
});
defaultButtons.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.add("defaultPressed");
    textArea.value += el.innerHTML;
    setTimeout(() => {
      el.classList.remove("defaultPressed");
    }, 250);
  });
});
rareButtons.forEach((el) => {
  el.addEventListener("mousedown", () => {
    el.classList.add("rarePressed");
    if (el.innerHTML == "Backspace" && textArea.id != "focus") {
      textArea.value = textArea.value.slice(0, -1);
    }
    if (el.innerHTML == "Space") {
      textArea.value += " ";
    } else if (el.innerHTML == "Tab") {
      textArea.value += "    ";
      textArea.setSelectionRange(textArea.value.length, textArea.value.length);
    } else if (el.innerHTML == "CapsLock") {
      el.classList.remove("rarePressed");
      el.classList.toggle("caps");
      if (
        defaultButtons[13].innerHTML == "q" ||
        defaultButtons[13].innerHTML == "й"
      ) {
        capsU();
      } else {
        capsL();
      }
    } else if (el.innerHTML == "Enter") {
      textArea.value += "\n";
    } else if (
      el.id == "ArrowUp" ||
      el.id == "ArrowRight" ||
      el.id == "ArrowLeft" ||
      el.id == "ArrowDown"
    ) {
      textArea.value += el.innerHTML;
    }
  });
});
rareButtons.forEach((el) => {
  el.addEventListener("mouseup", () => {
    el.classList.remove("rarePressed");
  });
});
rareButtons.forEach((el) => {
  el.addEventListener("mousedown", () => {
    if (el.innerHTML == "Shift") {
      el.classList.add("caps");
      if (document.getElementById("caps").classList.value == "rare-btn caps") {
        capsL();
      } else {
        capsU();
      }
      if (el.classList.value == "rare-btn rarePressed caps") {
        addShift();
      }
    }
  });
});
rareButtons.forEach((el) => {
  el.addEventListener("mouseup", () => {
    if (el.innerHTML == "Shift") {
      if (document.getElementById("caps").classList.value == "rare-btn caps") {
        capsU();
      } else {
        capsL();
      }
      if (el.classList.value == "rare-btn caps") {
        removeShift();
      }
      el.classList.remove("caps");
    }
  });
});
function capsL() {
  defaultButtons.forEach((el) => {
    el.innerHTML = el.innerHTML.toLowerCase();
  });
}
function capsU() {
  defaultButtons.forEach((el) => {
    el.innerHTML = el.innerHTML.toUpperCase();
  });
}
function change(c, e) {
  for (let k = 0; k < defaultButtons.length; k++) {
    for (let i = 0; i < c.length; i++) {
      for (let j = 0; j < c[i].length; j++) {
        if (defaultButtons[k].innerHTML.toLowerCase() === c[i][j]) {
          if (
            defaultButtons[13].innerHTML == "q" ||
            defaultButtons[13].innerHTML == "й"
          ) {
            defaultButtons[k].innerHTML = e[i][j];
          } else {
            defaultButtons[k].innerHTML = e[i][j].toUpperCase();
          }
        }
      }
    }
  }
}
function addShift() {
  for (let i = 0; i < firstRowShift.length; i++) {
    defaultButtons[i].innerHTML = firstRowShift[i];
  }
}
function removeShift() {
  for (let i = 0; i < firstRowShift.length; i++) {
    defaultButtons[i].innerHTML = firstRowNoShift[i];
  }
}
