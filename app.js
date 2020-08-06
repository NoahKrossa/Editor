const doc = document.getElementById("document-body");
const buttons = document.querySelectorAll("[data-tag]");
const buttonToggle = document.querySelector("[data-toggle]");
const commandButtons = document.querySelectorAll("[data-command]");

const insertNode = (tagname) => {
  let node = document.createElement(tagname);
  node.contentEditable = true;
  node.addEventListener("keydown", (e) => {
    if (e.code === "Backspace" && node.textContent.trim() === "")
      doc.removeChild(node);
    if (e.code === "Enter") {
      return e.preventDefault();
    }
  });
  node.addEventListener("focus", (e) => {
  if(node.tagName === 'P') document.getElementById('propbar').style.display = 'block'
  else document.getElementById('propbar').style.display = 'none'
  })

  doc.appendChild(node);
  buttonToggle.dataset.toggle = "false";
};

// Update command Button state
const updateCommandButtonState = (btn) => {
  btn.dataset.state = btn.dataset.state == "false" ? "true" : "false";
};

buttonToggle.addEventListener("click", (e) => {
  if (buttonToggle.dataset.toggle === "false")
    buttonToggle.dataset.toggle = "true";
  else buttonToggle.dataset.toggle = "false";
});

// APP ENTRY
const main = () => {
  // Toolbar controller
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      insertNode(btn.dataset.tag);
    });
  });

  // propsbar controller
  commandButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      updateCommandButtonState(btn);
      switch (btn.dataset.command) {
        case "bold":
          document.execCommand("bold");
          break;
        case "italic":
          document.execCommand("italic");
          break;
        case "underline":
          document.execCommand("underline");
          break;
        default:
          document.execCommand("strikethrough");
          break;
      }
    });
  });
};

window.addEventListener("load", main);
