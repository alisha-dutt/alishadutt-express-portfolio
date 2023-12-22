const words = [' Hello', ' Bonjour', ' Hola',' Namaste'];
const container = document.getElementById('animation-container');
let currentIndex = 0;

function animateText() {
  const currentWord = words[currentIndex];
  let currentCharacterIndex = 0;

  // Write
  const writeInterval = setInterval(() => {
    container.textContent = currentWord.slice(0, currentCharacterIndex + 1);
    currentCharacterIndex++;

    // Check if the word is fully written
    if (currentCharacterIndex === currentWord.length) {
      // Erase
      setTimeout(() => {
        const eraseInterval = setInterval(() => {
          container.textContent = currentWord.slice(0, currentCharacterIndex);
          currentCharacterIndex--;

          // Check if the word is fully erased
          if (currentCharacterIndex === 0) {
            clearInterval(eraseInterval);

            // Move to the next word
            currentIndex = (currentIndex + 1) % words.length;

            // Call the animation again for the next word
            setTimeout(animateText, 500);
          }
        }, 100);
      }, 1000); // Wait for 1 second before erasing
      clearInterval(writeInterval);
    }
  }, 100);
}

// Start the animation
animateText();
