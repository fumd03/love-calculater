document.getElementById("calculateBtn").addEventListener("click", function () {
  const girlfriendName = document.getElementById("girlfriendName").value.trim();
  const boyfriendName = document.getElementById("boyfriendName").value.trim();

  if (girlfriendName === "" || boyfriendName === "") {
    document.getElementById("loveResult").textContent =
      "Please enter both names!";
    return;
  }

  const compatibilityScore = Math.floor(Math.random() * 100) + 1;

  const message = `${girlfriendName} ❤️ ${boyfriendName} have a ${compatibilityScore}% compatibility!`;

  document.getElementById("loveResult").textContent = message;
});
