let groceryList = document.querySelector("#grocery-list ul");
groceryList.addEventListener("click", deleteItem);

function deleteItem(event) {
  let targetElement = event.target;
  if (targetElement.className == "delete") {
    targetElement.parentElement.remove();
  }
}

//add an item
let formElement = document.getElementById("add-item");
formElement.addEventListener("submit", addItem);
function addItem(event) {
  event.preventDefault();
  let inputValue = formElement.querySelector("input[type=text]").value;

  let ulelement = document.getElementsByTagName("ul")[0];

  const lielement = document.createElement("li");
  const itemelement = document.createElement("span");
  const deltelement = document.createElement("span");

  itemelement.textContent = inputValue;
  itemelement.classList.add("item");
  deltelement.textContent = "Delete";
  deltelement.classList.add("delete");

  lielement.appendChild(itemelement);
  lielement.appendChild(deltelement);
  ulelement.appendChild(lielement);
}

//hide-check

let checkBox = document.getElementById("hide");
checkBox.addEventListener("change", hideItems);

function hideItems() {
  let groceryListItems = document.getElementById("grocery-list");
  groceryListItems.style.display = "block";
  if (checkBox.checked) {
    groceryListItems.style.display = "none";
  }
}

//search-items

let searchElement =
  document.forms["search-item"].querySelector("input[type=text]");
searchElement.addEventListener("keyup", searchText);

function searchText(event) {
  let text = event.target.value.toLowerCase();

  const grocerieslISTS = document.querySelector("#grocery-list ul");
  let groceries = grocerieslISTS.getElementsByTagName("li");

  groceries = Array.from(groceries);
  groceries.forEach((grocery) => {
    let groceryName = grocery.firstElementChild.textContent.toLowerCase();
    if (groceryName.indexOf(text) != -1) {
      grocery.style.display = "block";
    } else {
      grocery.style.display = "none";
    }
  });
}
