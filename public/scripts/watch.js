const watch = document.getElementById("registration-watch");

const remove = document.getElementById("wallet");
const remove1 = document.getElementById("perfume");
const add = document.getElementById("watch");

function addClass() {
  if (!hasClass()) {
    return watch.classList.add("active");
  }
}

function removeClass() {
  if (hasClass) {
    return watch.classList.remove("active");
  }
}

function hasClass() {
  return watch.classList.contains("active");
}

add.addEventListener("click", addClass);

remove.addEventListener("click", removeClass);
remove1.addEventListener("click", removeClass);
