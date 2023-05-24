const $encryptBtn = document.getElementById("encrypt");
const $decryptBtn = document.getElementById("decrypt");

const selectAction = (action) => {
  if (action === "encrypt") {
    const $actionButtonAdd = document.getElementById("encrypt");
    const $actionButtonRemove = document.getElementById("decrypt");
    const $actionSpanAdd = document.getElementById("encrypt-action-span");
    const $actionSpanRemove = document.getElementById("decrypt-action-span");
    $actionButtonAdd.classList.add("active");
    $actionButtonRemove.classList.remove("active");
    $actionSpanAdd.classList.add("active");
    $actionSpanRemove.classList.remove("active");
  } else if (action === "decrypt") {
    const $actionButtonAdd = document.getElementById("decrypt");
    const $actionButtonRemove = document.getElementById("encrypt");
    const $actionSpanAdd = document.getElementById("decrypt-action-span");
    const $actionSpanRemove = document.getElementById("encrypt-action-span");
    $actionButtonAdd.classList.add("active");
    $actionButtonRemove.classList.remove("active");
    $actionSpanAdd.classList.add("active");
    $actionSpanRemove.classList.remove("active");
  }
};

const defaultAction = () => document.getElementById("encrypt").click();

export default {
  $encryptBtn,
  $decryptBtn,
  selectAction,
  defaultAction,
};
