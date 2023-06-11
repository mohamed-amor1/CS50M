// Define class names for different elements
const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

// Get references to the required elements in the HTML
const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

// Function to create a new todo item
function newTodo() {
  // Prompt the user to enter the todo item text
  const action = window.prompt("What would you like to do?");

  // If the user entered nothing, return
  if (!action) {
    return;
  }

  // Create a new list item element
  const li = document.createElement("li");
  li.classList.add(classNames.TODO_ITEM);

  // Create a new checkbox element
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add(classNames.TODO_CHECKBOX);

  // Attach an event listener to the checkbox to update counts
  input.addEventListener("change", updateCounts);

  // Create a new span element for the todo text
  const span = document.createElement("span");
  span.classList.add(classNames.TODO_TEXT);
  span.innerText = action; // Set the text content of the span

  // Create a new button element for deleting the todo
  const button = document.createElement("button");
  button.classList.add(classNames.TODO_DELETE);
  button.innerText = "Delete";

  // Attach an event listener to the delete button
  button.addEventListener("click", deleteTodo);

  // Append the input, span, and button elements to the list item
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  // Append the list item to the todo list
  list.appendChild(li);

  // Update the counts for the item and unchecked counts
  updateCounts();
}

// Function to update the item and unchecked counts
function updateCounts() {
  // Get all the todo items
  const items = document.getElementsByClassName(classNames.TODO_ITEM);

  // Get all the checked todo items
  const checkedItems = document.querySelectorAll(
    `.${classNames.TODO_CHECKBOX}:checked`
  );

  // Update the item count
  itemCountSpan.innerText = items.length;

  // Update the unchecked count
  uncheckedCountSpan.innerText = items.length - checkedItems.length;
}

// Function to delete a todo item
function deleteTodo(event) {
  // Get the parent list item of the delete button
  const item = event.target.parentElement;

  // Remove the list item from the DOM
  item.remove();

  // Update the counts for the item and unchecked counts
  updateCounts();
}

// Attach event listeners to all the delete buttons
function attachDeleteButtonListeners() {
  document
    .querySelectorAll(`.${classNames.TODO_DELETE}`)
    .forEach(function (button) {
      button.addEventListener("click", function (event) {
        if (window.confirm("Are you sure?")) {
          deleteTodo(event);
        }
      });
    });
}
