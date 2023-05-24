import menuElements from "./menu.js";
import actionsElements from "./action-options-styles.js";
import { inputTextBehaviour, servicesBehaviour } from "./services-behaviour.js";

copyButtonElements.behaviorCopyButton();

menuElements.$encryptionOptionButtons.forEach(function (option) {
  option.addEventListener("click", function () {
    menuElements.selectCipher(this);
  });
});


window.addEventListener("load", function () {
  menuElements.$ceaserCipherButton.click();
});

actionsElements.$encryptBtn.addEventListener("click", () =>
  actionsElements.selectAction("encrypt")
);
actionsElements.$decryptBtn.addEventListener("click", () =>
  actionsElements.selectAction("decrypt")
);

actionsElements.defaultAction();

actionsElements.$encryptBtn.addEventListener("click", () =>
  servicesBehaviour("encrypt")
);
actionsElements.$decryptBtn.addEventListener("click", () =>
  servicesBehaviour("decrypt")
);

document.getElementById("input-text").addEventListener("input", () => {
  inputTextBehaviour();
});