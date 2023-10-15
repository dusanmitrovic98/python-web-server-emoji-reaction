function showEmoji(emoji) {
    const emojiPopup = document.getElementById('emojiPopup');
    emojiPopup.textContent = emoji;
    emojiPopup.style.display = 'block';

    setTimeout(function () {
        emojiPopup.style.display = 'none';
    }, 3000); // Display emoji for 3 seconds
}
