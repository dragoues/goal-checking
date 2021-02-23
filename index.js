const Todo = (text, id) => `<div class="outer-item" id="outer-item-${id}" >
  <div class="to-do-item">
  <p> ${text} </p>
  <span class="close" data-outer-item="${id}" >  X </span>
  </div>
  <!-- /.to-do-item -->
  </div>
  <!-- /.outer-item -->`;
export default Todo;

const todos = [
    {
        text: "Complete My Assessment",
        created: "Wed Jan 22 2020 07:02:0",
        completed: false,
    },
    {
        text: "Complete My Assessment",
        created: "Wed Jan 22 2020 07:03:0",
        completed: false,
    },
];

const newArrayJustText = todos.map((i) => item.text);
console.log(map); //  ['Complete My Assessment','Complete My Assessment'];

const newArrayJustText = todos.map((i) => item.text);
console.log(map); //  ['Complete My Assessment','Complete My Assessment'];

let htmlList = todos.map((item) => Todo(item.text, item.id));
document.querySelector(".list").innerHTML = htmlList;

const array_1 = [1, 2, 3, 4, 5, 6];
let array_2 = array_1;
array_2.push(7);
console.log(array_1);
console.log(array_2);


const array_1 = [1, 2, 3, 4, 5, 6]
const array_2 = [....array_1, 7]


window.addEventListener("DOMContentLoaded", render(todos));

function render(todos) {
    const tds = [...todos];
    const handleCloseClick = (e) => {
        render(tds.filter((c) => e.target.dataset.outerItem != c.id));
    };

    document.querySelector("#app").innerHTML = view;
    let htmlList = todos.map((item) => Todo(item.text, item.id));
    document.querySelector(".list").innerHTML = htmlList.join(" ");
    document
        .querySelectorAll(".close")
        .forEach((e) => e.addEventListener("click", handleCloseClick));
}