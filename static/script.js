function showEmoji(emoji) {
  const emojiPopup = document.getElementById("emojiPopup");
  const emojiElement = document.createElement("div");
  emojiElement.className = "emoji";
  emojiElement.innerText = emoji;
  emojiPopup.appendChild(emojiElement);

  setTimeout(() => {
    emojiElement.remove();
  }, 3000); // Adjust the duration as needed (milliseconds)
