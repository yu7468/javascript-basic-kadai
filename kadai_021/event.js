const osBtn = document.getElementById("btn");
const chText = document.getElementById("text");

osBtn.addEventListener("click", () => {
  setTimeout(() => {
    chText.innerHTML = "ボタンをクリックしました";
  }, 2000);
});
