
let gameStarted = false;

// erst die Karten erstellen lassen
cardBuild(3,4);

document.getElementById("startBtn").addEventListener("click", function() {
  document.getElementById("headline").innerText = "CaBuX gestartet";
  this.style.backgroundColor = "green";
  gameStarted = true;
  console.log(`gameStarted = ${gameStarted}`)
});

