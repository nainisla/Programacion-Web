let lista = [];

function addTask() {
  const input = document.getElementById("input-task");
  const text = input.value;
  console.log(text);

  const obj = { task: text, completed: false };
  if (text !== "") {
    lista.push(obj);
  }

  const list = document.getElementById("task-list");

  //crear un elemento html
  const li = document.createElement("li");
  li.textContent = obj.task;
  list.append(li);
}