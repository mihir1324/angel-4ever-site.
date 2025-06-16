
document.getElementById("ribbon").addEventListener("click", () => {
  const ribbonSound = document.getElementById("ribbon-sound");
  ribbonSound.play();
  document.getElementById("ribbon-section").innerHTML = `<img src="images/cut-ribbon.gif" width="200">`;
  setTimeout(() => {
    document.getElementById("main-content").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("letter").classList.remove("hidden");
    }, 30000);
  }, 2000);
});
