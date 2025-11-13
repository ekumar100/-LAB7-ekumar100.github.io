function init() {
  const button = document.getElementById("entrybutton");
  const userInput = document.getElementById("entryinput");
  const textOutput = document.getElementById("textoutput");

  button.addEventListener("click", function() {
    const message = userInput.value.trim();
    if (message === "") {
      alert("Please enter a message!");
    } else {
      alert("Eashan Kumar: " + message);
      textOutput.textContent = message;
    }
  });
}

window.addEventListener("load", init);