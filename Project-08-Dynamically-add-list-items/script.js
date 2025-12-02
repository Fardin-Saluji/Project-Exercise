const addItemBtn = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");

let itemCount = 0;

addItemBtn.addEventListener("click", () => {
  itemCount++;

  const li = document.createElement("li");
  li.textContent = `Item ${itemCount}`;

  itemList.appendChild(li);
});
