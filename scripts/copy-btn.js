const $copyButton = document.getElementById("copy-button");
const $outputText = document.getElementById("output-text");
const $copyMessage = document.getElementById("copy-message");

const behaviorCopyButton = () => {
  $copyButton.addEventListener("click", () => {
    if ($outputText.value.length > 0) {
      navigator.clipboard
        .writeText($outputText.value)
        .then(() => {
          $copyMessage.textContent = "Copied!";
          $copyMessage.classList.add("success");
          $copyMessage.style.display = "block";
          setTimeout(() => {
            $copyMessage.style.display = "none";
            $copyMessage.classList.remove("success");
          }, 2000);
        })
        .catch((err) => {
          $copyMessage.textContent = "Error can't copy text";
          $copyMessage.classList.add("error");
          $copyMessage.style.display = "block";
          console.error("Error al intentar copiar el texto en el portapapeles: ", err);
          setTimeout(() => {
            $copyMessage.style.display = "none";
            $copyMessage.classList.remove("error");
          }, 2000);
        });
    } else {
      $copyMessage.textContent = "no text to copy";
      $copyMessage.classList.add("error");
      $copyMessage.style.display = "block";
      setTimeout(() => {
        $copyMessage.style.display = "none";
        $copyMessage.classList.remove("error");
      }, 2000);
    }
  });
};


export default {
  $copyButton,
  $outputText,
  $copyMessage,
  behaviorCopyButton,
};
