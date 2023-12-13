let basicPrice = document.getElementById("basicPrice");
let proPrice = document.getElementById("proPrice");
let masterPrice = document.getElementById("masterPrice");

let checkboxElement = document.getElementById("checkbox");

checkboxElement.addEventListener("change", function () {
if (checkboxElement.checked) {
  basicPrice.textContent = "19.99";
  proPrice.textContent = "24.99";
  masterPrice.textContent = "39.99"
} else {
  basicPrice.textContent = "199.99";
  proPrice.textContent = "249.99";
  masterPrice.textContent = "399.99"
}
});