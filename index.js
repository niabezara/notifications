const marked = document.querySelector(".marked");
const mark = document.querySelectorAll("#mark");
const num = document.querySelector(".num");
const dot = document.querySelectorAll("dot");

let count = 3;
mark.forEach((item) => {
  item.addEventListener("click", () => {
    if (!item.classList.contains("clicked")) {
      item.style.backgroundColor = "#FFFFFF";
      item.classList.add("clicked");
      count -= 1;
      num.textContent = count.toString();
      const dotElement = item.querySelector(".dot");
      if (dotElement) {
        dotElement.remove();
      }
      count = Math.max(count, 1);
    }
  });
});

function unmark() {
  mark.forEach((items) => {
    if (!items.classList.contains("clicked")) {
      items.classList.add("clicked");
      items.style.backgroundColor = "#FFFFFF";
      const dotElement = items.querySelector(".dot");
      if (dotElement) {
        dotElement.remove();
      }
      num.textContent = "0";
    }
  });
}
