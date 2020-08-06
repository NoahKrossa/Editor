const doc = document.getElementById("document-body");
const buttons = document.querySelectorAll("[data-tag]");

const insertNode = (tagname) => {
  let node = document.createElement(tagname)
  node.contentEditable = true
  node.addEventListener('keyup', (e)=> {
    if(e.code === 'Backspace' && node.textContent.trim()==="")
      doc.removeChild(node)
  })
  doc.appendChild(node)
};

buttons.forEach(btn => {
  btn.addEventListener('click', (e)=> {
    insertNode(btn.dataset.tag)
  })
})



// APP ENTRY
const main = () => {};
window.addEventListener("load", main);
