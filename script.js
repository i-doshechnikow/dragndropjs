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

function dragStart() {
  console.log("start");
}

function dragOver() {
  console.log("over");
}

function dragDrop() {
  console.log("drop");
}

function dragEnter() {
  console.log("enter");
}

function dragLeave() {
  console.log("leave");
}
