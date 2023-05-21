console.log("歡迎訪問！");

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(`點擊了 ${link.textContent} 分類`);
  });
});