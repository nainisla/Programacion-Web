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
//Boton Eliminar
const botonEliminar = document.createElement('button');
botonEliminar.textContent = 'X';

botonEliminar.addEventListener('click', () => {
  li.remove();
});

li.appendChild(botonEliminar);
task-list.appendChild(li);
}