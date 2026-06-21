document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector("button");
  button.textContent = "已收到需求";
  button.disabled = true;
  setTimeout(() => {
    button.textContent = "提交询价";
    button.disabled = false;
  }, 2400);
});
