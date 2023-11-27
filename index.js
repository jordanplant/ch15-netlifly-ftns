const messageNode = document.getElementById("message");

const render = (message = "", node = messgeNode) => {
  messageNode.textContent = message;
};

render("Hello");
