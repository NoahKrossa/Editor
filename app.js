const doc = document.getElementById("document-body");
const buttons = document.querySelectorAll("[data-tag]");
const buttonToggle = document.querySelector("[data-toggle]");

const insertNode = (tagname) => {
  let node = document.createElement(tagname);
  node.contentEditable = true;
  node.addEventListener("keydown", (e) => {
    if (e.code === "Backspace" && node.textContent.trim() === "")
      doc.removeChild(node);
      if (e.code === "Enter"){
        return e.preventDefault()
      }
  });
  doc.appendChild(node);
  buttonToggle.dataset.toggle = 'false'
};

buttonToggle.addEventListener("click", (e) => {

  if(buttonToggle.dataset.toggle ==='false') buttonToggle.dataset.toggle = 'true'
  else buttonToggle.dataset.toggle = 'false'

});

// APP ENTRY
const main = () => {
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      insertNode(btn.dataset.tag);
    });
  });
};
window.addEventListener("load", main);
