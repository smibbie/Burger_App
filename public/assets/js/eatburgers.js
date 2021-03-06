document.addEventListener("DOMContentLoaded", () => {

// Globals -----------------------------------------------
const form = document.querySelector('.form');
const button = document.querySelector('button.devour');

// Update ---------------------------------
button.addEventListener("click", (e) => {
  let id = e.target.getAttribute("data-id");
  let devoured = e.target.getAttribute("data-devoured");

  if (devoured === 0) {
    devoured = false;
  } else if (devoured === 1) {
    devoured = true;
  }

  let newDevoured = {
    devoured: devoured
  };

// Test
  console.log(newDevoured);
  console.log(id);

  fetch(`http://localhost:3000/api/burgers/${id}`, {
      method: "PUT",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newDevoured)
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(`Changed devoured to ${data}`);
      location.reload();
    })
    .catch(err => console.log(err));
});

// Create ---------------------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let burgerName = document.getElementById("burgerName");
  let devoured = document.querySelector("[name=newburger]:checked");

  if (devoured === 0) {
    devoured = false;
  } else if (devoured === 1) {
    devoured = true;
  }

  let newBurger = {
    burger_name: burgerName.value,
    devoured: devoured.value
  }

  // Test
  console.log(newBurger);

  fetch(`http://localhost:3000/api/burgers`, {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBurger)
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      location.reload();
    })
    .catch(err => console.log(err));

});

// DOM Loaded Wrapper -----------------------------
});
