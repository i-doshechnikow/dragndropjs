const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "person 1",
  "person 2",
  "person 3",
  "person 4",
  "person 5",
  "person 6",
  "person 7",
  "person 8",
  "person 9",
  "person 10",
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);
      listItem.innerHTML = `<span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
    </div>`;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
  addEventListeners();
}

function dragStart() {
  dragStartIndex = +this.closest("li").getAttribute("data-index");
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  let dragEndIndex = +this.getAttribute("data-index");
  this.classList.remove("over");

  console.log(dragEndIndex);
  swapItems(dragStartIndex, dragEndIndex);
}

function swapItems(startIndex, endIndex) {
  let itemOne = listItems[startIndex].querySelector(".draggable");
  let itemTwo = listItems[endIndex].querySelector(".draggable");

  listItems[startIndex].appendChild(itemTwo);
  listItems[endIndex].appendChild(itemOne);
}

function dragEnter() {
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((dragItem) => {
    dragItem.addEventListener("dragover", dragOver);
    dragItem.addEventListener("drop", dragDrop);
    dragItem.addEventListener("dragenter", dragEnter);
    dragItem.addEventListener("dragleave", dragLeave);
  });
}
