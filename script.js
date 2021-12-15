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
}

// console.log("draggable_list :>> ", draggable_list);
// console.log("check :>> ", check);
