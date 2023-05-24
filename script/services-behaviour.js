import { encryptCeaserCipher, decryptCeaserCipher } from "./ceaser-cipher.js";
import { encryptVigenereCipher, decryptVigenereCipher } from "./vigenere-cipher.js";

export const inputTextBehaviour = () => {
    let action;
    if (document.getElementById("encrypt").classList.contains("active")) {
      action = "encrypt";
    } else if (document.getElementById("decrypt").classList.contains("active")) {
      action = "decrypt";
    }
    if (action) {
      servicesBehaviour(action);
    }
  };
  
  export const servicesBehaviour = (action) => {
    let type = document.getElementById("encryption-type-button-title").innerHTML;
  
    if (action === "encrypt") {
      if (type === "César Cipher") {
        encryptCeaserCipher();
      } else if (type === "Vigenère Cipher") {
        encryptVigenereCipher();
      }
  
    } else if (action === "decrypt") {
      if (type === "César Cipher") {
        decryptCeaserCipher();
      } else if (type === "Vigenère Cipher") {
        decryptVigenereCipher();
      }
    }
  };