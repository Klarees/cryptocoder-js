export const encryptVigenereCipher = () => {
  let text = document.getElementById("input-text").value;
  let key = document.getElementById("vigenere-key-input").value;
  let alphabet = document.getElementById("vigenere-alphabet").value;
  let specialChars = document.getElementById("caracteres").value;
  let caseSensitive = document.getElementById("case-sensitive").value;
  let keyMode = document.getElementById("vigenere-key-modes").value;
  let vigenereVariants = document.getElementById("vigenere-variants").value;

  if (vigenereVariants === "standard") {
    document.querySelector(".vigenere-key__container").style.display = "block";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "block";
    if (caseSensitive === "keep" || caseSensitive === "ignore") {
      let output = "";
      let keyIndex = 0;

      for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let alphabetIndex = alphabet.indexOf(char.toLowerCase());
        if (alphabetIndex === -1) {
          output += caseSensitive === "keep" ? char : char.toLowerCase();
          continue;
        }

        let shift = alphabet.indexOf(key[keyIndex].toLowerCase());
        keyIndex++;
        if (keyMode === "autokey") {
          key += char;
        }

        if (keyIndex >= key.length) {
          keyIndex = 0;
        }
        let cipheredIndex = (alphabetIndex + shift) % alphabet.length;
        let cipheredChar = alphabet[cipheredIndex];
        output +=
          caseSensitive === "keep"
            ? char.toUpperCase() === char
              ? cipheredChar.toUpperCase()
              : cipheredChar
            : cipheredChar.toLowerCase();
      }
      if (specialChars === "ignore") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      document.getElementById("output-text").value = output;
    } else {
      let output = "";
      let alphabetIndex = {};
      for (let i = 0; i < alphabet.length; i++) {
        alphabetIndex[alphabet[i]] = i;
      }
      for (let i = 0, j = 0; i < text.length; i++) {
        let char = text[i];
        if (alphabetIndex.hasOwnProperty(char)) {
          let shift = alphabetIndex[key[j % key.length]];
          let newIndex = (alphabetIndex[char] + shift) % alphabet.length;
          output += alphabet[newIndex];
          if (keyMode === "autokey") {
            key += char;
          }
          j++;
        } else {
          output += char;
        }
      }
      if (specialChars === "ignore") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }
      document.getElementById("output-text").value = output;
    }
  } else if (vigenereVariants === "beaufort") {
    document.querySelector(".vigenere-key__container").style.display = "block";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "block";
    if (caseSensitive === "keep" || caseSensitive === "ignore") {
      let output = "";
      let keyIndex = 0;
      for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let alphabetIndex = alphabet.indexOf(char.toLowerCase());

        if (alphabetIndex === -1) {
          output += caseSensitive === "keep" ? char : char.toLowerCase();
          continue;
        }

        let shift = alphabet.indexOf(key[keyIndex].toLowerCase());
        keyIndex++;
        if (keyMode === "autokey") {
          key += char;
        }
        if (keyIndex >= key.length) {
          keyIndex = 0;
        }

        let cipheredIndex =
          (alphabet.length + shift - alphabetIndex) % alphabet.length;
        let cipheredChar = alphabet[cipheredIndex];
        output +=
          caseSensitive === "keep"
            ? char.toUpperCase() === char
              ? cipheredChar.toUpperCase()
              : cipheredChar
            : cipheredChar.toLowerCase();
      }
      if (specialChars === "ignore") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      document.getElementById("output-text").value = output;
    } else {
      let output = "";
      let alphabetIndex = {};
      for (let i = 0; i < alphabet.length; i++) {
        alphabetIndex[alphabet[i]] = i;
      }

      for (let i = 0, j = 0; i < text.length; i++) {
        let char = text[i];
        if (alphabetIndex.hasOwnProperty(char)) {
          let shift = alphabetIndex[key[j % key.length]];
          let newIndex =
            (alphabet.length + shift - alphabetIndex[char]) % alphabet.length;
          output += alphabet[newIndex];
          if (keyMode === "autokey") {
            key += char;
          }
          j++;
        } else {
          output += char;
        }
      }
      if (specialChars === "ignore") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }
      document.getElementById("output-text").value = output;
    }
  } else if (vigenereVariants === "german-variant") {
    document.querySelector(".vigenere-key__container").style.display = "block";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "block";
    if (caseSensitive === "keep" || caseSensitive === "ignore") {
      let output = "";
      let keyIndex = 0;

      for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let alphabetIndex = alphabet.indexOf(char.toLowerCase());

        if (alphabetIndex === -1) {
          output += caseSensitive === "keep" ? char : char.toLowerCase();
          continue;
        }

        let shift = alphabet.indexOf(key[keyIndex].toLowerCase());
        keyIndex++;

        if (keyMode === "autokey") {
          key += char;
        }

        if (keyIndex >= key.length) {
          keyIndex = 0;
        }

        let cipheredIndex =
          (alphabet.length + alphabetIndex - shift) % alphabet.length;
        let cipheredChar = alphabet[cipheredIndex];
        output +=
          caseSensitive === "keep"
            ? char.toUpperCase() === char
              ? cipheredChar.toUpperCase()
              : cipheredChar
            : cipheredChar.toLowerCase();
      }

      if (specialChars === "ignore") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      document.getElementById("output-text").value = output;
    } else {
      let output = "";
      let alphabetIndex = {};
      for (let i = 0; i < alphabet.length; i++) {
        alphabetIndex[alphabet[i]] = i;
      }

      for (let i = 0, j = 0; i < text.length; i++) {
        let char = text[i];

        if (alphabetIndex.hasOwnProperty(char)) {
          let shift = alphabetIndex[key[j % key.length]];
          let newIndex =
            (alphabet.length + alphabetIndex[char] - shift) % alphabet.length;
          output += alphabet[newIndex];

          if (keyMode === "autokey") {
            key += char;
          }
          j++;
        } else {
          output += char;
        }
      }

      if (specialChars === "ignore") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      document.getElementById("output-text").value = output;
    }
  } else if (vigenereVariants === "trithemius") {
    document.querySelector(".vigenere-key__container").style.display = "none";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "none";

    if (specialChars === "ignore") {
      text = text.replace(/[^a-zA-Z0-9]+/g, "");
    }

    let result = "";
    let shift = 0;
    for (let i = 0; i < text.length; i++) {
      let char = text[i];

      let index = -1;
      if (caseSensitive === "estricto") {
        index = alphabet.indexOf(char);
      } else {
        index = alphabet.indexOf(char.toLowerCase());
      }

      if (index === -1) {
        result += char;
        continue;
      }

      let encryptedChar = alphabet[(index + shift) % alphabet.length];

      if (caseSensitive === "keep") {
        if (char === char.toUpperCase()) {
          encryptedChar = encryptedChar.toUpperCase();
        }
      } else if (caseSensitive === "ignore") {
        encryptedChar = encryptedChar.toLowerCase();
      }

      result += encryptedChar;
      shift++;
    }

    document.getElementById("output-text").value = result;
  }
};

export const decryptVigenereCipher = () => {
  let text = document.getElementById("input-text").value;
  let key = document.getElementById("vigenere-key-input").value;
  let alphabet = document.getElementById("vigenere-alphabet").value;
  let specialChars = document.getElementById("caracteres").value;
  let caseSensitive = document.getElementById("case-sensitive").value;
  let keyMode = document.getElementById("vigenere-key-modes").value;
  let vigenereVariants = document.getElementById("vigenere-variants").value;
  if (vigenereVariants === "standard") {
    document.querySelector(".vigenere-key__container").style.display = "block";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "block";

    if (caseSensitive === "keep" || caseSensitive === "ignore") {
      let output = "";
      let keyIndex = 0;

      for (let i = 0; i < text.length; i++) {
        let char = text[i];

        let alphabetIndex = alphabet.indexOf(char.toLowerCase());

        if (alphabetIndex === -1) {
          output += caseSensitive === "keep" ? char : char.toLowerCase();
          continue;
        }

        let shift = alphabet.indexOf(key[keyIndex].toLowerCase());
        keyIndex++;

        let decipheredIndex =
          (alphabetIndex - shift + alphabet.length) % alphabet.length;
        let decipheredChar = alphabet[decipheredIndex];

        output +=
          caseSensitive === "keep"
            ? char.toUpperCase() === char
              ? decipheredChar.toUpperCase()
              : decipheredChar
            : decipheredChar.toLowerCase();

        if (keyMode === "autokey") {
          key += decipheredChar;
        }

        if (keyIndex >= key.length) {
          keyIndex = 0;
        }
      }

      if (specialChars === "ignore") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      document.getElementById("output-text").value = output;
    } else {
      let output = "";

      let alphabetIndex = {};
      for (let i = 0; i < alphabet.length; i++) {
        alphabetIndex[alphabet[i]] = i;
      }

      for (let i = 0, j = 0; i < text.length; i++) {
        let char = text[i];

        if (alphabetIndex.hasOwnProperty(char)) {
          let shift = alphabetIndex[key[j % key.length]];
          let newIndex =
            (alphabetIndex[char] - shift + alphabet.length) % alphabet.length;
          output += alphabet[newIndex];

          if (keyMode === "autokey") {
            key += output[i];
          }
          j++;
        } else {
          output += char;
        }
      }
      if (specialChars === "ignore") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      document.getElementById("output-text").value = output;
    }
  } else if (vigenereVariants === "beaufort") {
    document.querySelector(".vigenere-key__container").style.display = "block";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "block";
    if (caseSensitive === "keep" || caseSensitive === "ignore") {
      let output = "";
      let keyIndex = 0;

      for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let alphabetIndex = alphabet.indexOf(char.toLowerCase());

        if (alphabetIndex === -1) {
          output += caseSensitive === "keep" ? char : char.toLowerCase();
          continue;
        }

        let shift = alphabet.indexOf(key[keyIndex].toLowerCase());
        keyIndex++;

        let cipheredIndex =
          (alphabet.length + shift - alphabetIndex) % alphabet.length;
        let cipheredChar = alphabet[cipheredIndex];

        output +=
          caseSensitive === "keep"
            ? char.toUpperCase() === char
              ? cipheredChar.toUpperCase()
              : cipheredChar
            : cipheredChar.toLowerCase();

        if (keyMode === "autokey") {
          key += cipheredChar;
        }

        if (keyIndex >= key.length) {
          keyIndex = 0;
        }
      }

      if (specialChars === "ignore") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      document.getElementById("output-text").value = output;
    } else {
      let output = "";
      let alphabetIndex = {};
      for (let i = 0; i < alphabet.length; i++) {
        alphabetIndex[alphabet[i]] = i;
      }

      for (let i = 0, j = 0; i < text.length; i++) {
        let char = text[i];
        if (alphabetIndex.hasOwnProperty(char)) {
          let shift = alphabetIndex[key[j % key.length]];
          let newIndex =
            (alphabet.length + shift - alphabetIndex[char]) % alphabet.length;
          output += alphabet[newIndex];
          if (keyMode === "autokey") {
            key += output[i];
          }
          j++;
        } else {
          output += char;
        }
      }
      if (specialChars === "ignore") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }
      document.getElementById("output-text").value = output;
    }
  }
  if (vigenereVariants === "german-variant") {
    document.querySelector(".vigenere-key__container").style.display = "block";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "block";
    if (caseSensitive === "keep" || caseSensitive === "ignore") {
      let output = "";
      let keyIndex = 0;

      for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let alphabetIndex = alphabet.indexOf(char.toLowerCase());

        if (alphabetIndex === -1) {
          output += caseSensitive === "keep" ? char : char.toLowerCase();
          continue;
        }

        let shift = alphabet.indexOf(key[keyIndex].toLowerCase());
        keyIndex++;

        let decipheredIndex = (alphabetIndex + shift) % alphabet.length;
        let decipheredChar = alphabet[decipheredIndex];
        output +=
          caseSensitive === "keep"
            ? char.toUpperCase() === char
              ? decipheredChar.toUpperCase()
              : decipheredChar
            : decipheredChar.toLowerCase();

        if (keyMode === "autokey") {
          key += decipheredChar;
        }

        if (keyIndex >= key.length) {
          keyIndex = 0;
        }
      }

      if (specialChars === "ignore") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      document.getElementById("output-text").value = output;
    } else {
      let output = "";

      let alphabetIndex = {};
      for (let i = 0; i < alphabet.length; i++) {
        alphabetIndex[alphabet[i]] = i;
      }

      for (let i = 0, j = 0; i < text.length; i++) {
        let char = text[i];

        if (alphabetIndex.hasOwnProperty(char)) {
          let shift = alphabetIndex[key[j % key.length]];
          let newIndex = (alphabetIndex[char] + shift) % alphabet.length;
          output += alphabet[newIndex];
          if (keyMode === "autokey") {
            key += output[i];
          }
          j++;
        } else {
          output += char;
        }
      }
      if (specialChars === "ignore") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }
      document.getElementById("output-text").value = output;
    }
  } else if (vigenereVariants === "trithemius") {

    document.querySelector(".vigenere-key__container").style.display = "none";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "none";
    if (specialChars === "ignore") {
      text = text.replace(/[^a-zA-Z0-9]+/g, "");
    }

    let result = "";
    let shift = 0;
    for (let i = 0; i < text.length; i++) {
      let char = text[i];

      let index = -1;
      if (caseSensitive === "estricto") {
        index = alphabet.indexOf(char);
      } else {
        index = alphabet.indexOf(char.toLowerCase());
      }

      if (index === -1) {
        result += char;
        continue;
      }

      let decryptedCharIndex =
        (index - shift + alphabet.length) % alphabet.length;
      let decryptedChar = alphabet[decryptedCharIndex];

      if (caseSensitive === "keep") {
        if (char === char.toUpperCase()) {
          decryptedChar = decryptedChar.toUpperCase();
        }
      } else if (caseSensitive === "ignore") {
        decryptedChar = decryptedChar.toLowerCase();
      }

      result += decryptedChar;
      shift++;
    }
GHhhhhhhhhhhhGgggggggggh
    document.getElementById("output-text").value = result;
  }
};
