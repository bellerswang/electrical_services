const year = document.getElementById("year");
const form = document.querySelector(".quote-form");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    if (!button) return;

    button.textContent = "已收到需求";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = "提交询价";
      button.disabled = false;
    }, 2400);
  });
}
