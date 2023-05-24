import { inputTextBehaviour } from "./services-behaviour.js";
import { ciphersDescriptions } from "./description-ciphers.js";

const $encryptionTypeButton = document.getElementById("encryption-type-button");
const $encryptionTypeButtonTitle = document.getElementById(
  "encryption-type-button-title"
);
const $encryptionOptionButtons =
  document.querySelectorAll(".encryption-option");
const $aluraCipherButton = document.getElementById("vigenere-cipher");
const $descriptionTitle = document.getElementById("description-title");
const $cipherDescription = document.getElementById("description-text");
const $encryptionMenu = document.getElementById("encryption-menu");
const $closeButton = document.querySelector(".close-button");

$encryptionTypeButton.addEventListener("click", function () {
  $encryptionMenu.style.display = "block";
});

$closeButton.addEventListener("click", function () {
  $encryptionMenu.style.display = "none";
});

$encryptionMenu.addEventListener("click", function (e) {
  if (e.target === $encryptionMenu) {
    $encryptionMenu.style.display = "none";
  }
});

const selectCipher = (selectedOption) => {
  $encryptionOptionButtons.forEach(function (option) {
    option.classList.remove("active");
    option.querySelector(".frame").classList.remove("active");
  });

  selectedOption.classList.add("active");
  selectedOption.querySelector(".frame").classList.add("active");

  $encryptionTypeButtonTitle.innerText =
    selectedOption.querySelector(".cipher-name").innerText;
  $encryptionMenu.style.display = "none";

  $descriptionTitle.innerHTML =
    selectedOption.querySelector(".cipher-name").innerText;
  $cipherDescription.innerHTML =
    ciphersDescriptions[selectedOption.querySelector(".cipher-name").innerText];

  if (document.querySelector(".cipherCustomMenu-container"))
    document.querySelector(".cipherCustomMenu-container").remove();

  const $cipherCustomMenuContainer = document.createElement("div");
  $cipherCustomMenuContainer.setAttribute(
    "class",
    "cipherCustomMenu-container"
  );

  document
    .querySelector(".encryption-type__btn-container")
    .insertAdjacentElement("afterend", $cipherCustomMenuContainer);

  let cipherCustomMenuContent = "";
  switch (selectedOption.querySelector(".cipher-name").innerHTML) {
    case "César Cipher":
      cipherCustomMenuContent = `
              <div class="cesar-menu___container">
                <div class="cesar-menu__block-container">
                  <label for="offset">Key:</label>
                  <div class="offset-input__container">
                    <button id="substract-offset" class="substract-btn">-</button>
                    <input type="number" id="offset" class="offset-input" min="1" max="25" value="0" readonly>
                    <span id="offset-placeholder" class="offset-span-input"></span>
                    <button id="add-offset" class="add-btn">+</button>
                  </div>
                </div>
                <div class="cesar-menu__block-container">
                  <label for="alphabet">Alphabet:</label>
                  <input type="text" id="alphabet" class="alphabet-input" value="abcdefghijklmnopqrstuvwxyz">
                </div>
                <div class="cesar-menu__last-block-container">
                  <div class="cesar-menu__case-sensitive">
                    <label for="case-sensitive">Discriminates upper/lowercase</label>
                    <select id="case-sensitive">
                      <option value="mantener">Keep</option>
                      <option value="ignorar">Ignore</option>
                      <option value="estricto">Strict (A ≠ a)</option>
                    </select>
                  </div>
                  <div class="ceaser-menu__foreign-chars">
                    <label for="caracteres">Special Character:</label>
                    <select id="caracteres">
                      <option value="respetar">Include</option>
                      <option value="ignorar">Ignore</option>
                    </select>
                  </div>
                </div>
              </div>
          `;
      break;
    case "Vigenère Cipher":
      cipherCustomMenuContent = `
            <div class="vigenere-cipher__container">
              <div class="vigenere-variants__container">
                <label class="variants-vigenere-cipher">Variants</label>
                <select id="vigenere-variants" class="vigenere-variants">
                  <option value="standard">Standard Vigenère Cipher</option>
                  <option value="beaufort">Beaufort Cipher</option>
                  <option value="german-variant">Variant Alemana</option>
                  <option value="trithemius">Trithemius Cipher</option>
                </select>
              </div>
              <div class="vigenere-key__container">
                <label class="vigenere-key-label" for="vigenere-key-input"">Key</label>
                <input type="text" class="vigenere-key__input" id="vigenere-key-input" value="default" minlength="2">
              </div>
              <div class="vigenere-key-mode__container">
                  <label for="vigenere-key-mode">Key Behavior</label>
                  <select class="vigenere-key-modes" id="vigenere-key-modes">
                    <option value="repetir">Repeat</option>
                    <option value="autokey">Autokey</option>
                  </select>
              </div>
              <div class="vigenere-alphabet__container">
                  <label for="vigenere-alphabet">Alphabet:</label>
                  <input type="text" id="vigenere-alphabet" class="vigenere-alphabet-input" value="abcdefghijklmnopqrstuvwxyz">
              </div>
              <div class="vigenere-menu__last-block-container">
                  <div class="cesar-menu__case-sensitive">
                    <label for="case-sensitive">Discriminates upper/lowercase</label>
                    <select class="case-select" id="case-sensitive">
                      <option value="keep">Keep</option>
                      <option value="ignore">Ignore</option>
                      <option value="strict">Strict (A ≠ a)</option>
                    </select>
                  </div>
                  <div class="ceaser-menu__foreign-chars">
                    <label for="caracteres">Special Characters:</label>
                    <select class="char-select" id="caracteres">
                      <option value="respetar">Include</option>
                      <option value="ignorar">Ignore</option>
                    </select>
                  </div>
                </div>
              </div>         
            </div>
              
          `;
      break;
    default:
      cipherCustomMenuContent = "";
      break;
  }
  $cipherCustomMenuContainer.innerHTML = cipherCustomMenuContent;

  if (document.getElementById("substract-offset")) {
    const offsetInput = document.getElementById("offset");
    const alphabetInput = document.getElementById("alphabet");
    const offsetPlaceholder = document.getElementById("offset-placeholder");
    const addOffsetBtn = document.getElementById("add-offset");
    const substractOffsetBtn = document.getElementById("substract-offset");
    const selectCaseStrategy = document.getElementById("case-sensitive");
    const charsStrategy = document.getElementById("caracteres");

    const updatePlaceholder = () => {
      let offset = parseInt(offsetInput.value) % alphabetInput.value.length;
      let letter = alphabetInput.value[offset];
      offsetPlaceholder.innerHTML = `${alphabetInput.value[0]} ➔ ${letter}`;
    };
    updatePlaceholder();

    substractOffsetBtn.addEventListener("click", () => {
      let offset = document.getElementById("offset");
      offset.value = parseInt(offset.value) - 1;
      inputTextBehaviour();
      updatePlaceholder();
    });

    addOffsetBtn.addEventListener("click", () => {
      let offset = document.getElementById("offset");
      offset.value = parseInt(offset.value) + 1;
      inputTextBehaviour();
      updatePlaceholder();
    });

    alphabetInput.addEventListener("input", () => {
      inputTextBehaviour();
      updatePlaceholder();
    });

    selectCaseStrategy.addEventListener("change", () => {
      inputTextBehaviour();
    });

    charsStrategy.addEventListener("change", () => {
      inputTextBehaviour();
    });
  }

  if (document.querySelector(".vigenere-cipher__container")) {
    let $key = document.getElementById("vigenere-key-input");
    let $alphabet = document.getElementById("vigenere-alphabet");
    let $specialChars = document.getElementById("caracteres");
    let $caseSensitive = document.getElementById("case-sensitive");
    let $keyMode = document.getElementById("vigenere-key-modes");
    let $vigenereVariants = document.getElementById("vigenere-variants");

    $alphabet.addEventListener("input", () => {
      inputTextBehaviour();
    });

    $keyMode.addEventListener("change", () => {
      inputTextBehaviour();
    });

    $caseSensitive.addEventListener("change", () => {
      inputTextBehaviour();
    });

    $specialChars.addEventListener("change", () => {
      inputTextBehaviour();
    });

    $key.addEventListener("input", () => {
      inputTextBehaviour();
    });

    $vigenereVariants.addEventListener("change", () => {
      inputTextBehaviour();
    });
  }

  inputTextBehaviour();
};

export default {
  $encryptionTypeButton,
  $encryptionTypeButtonTitle,
  $encryptionOptionButtons,
  $encryptionMenu,
  $closeButton,
  selectCipher,
};
