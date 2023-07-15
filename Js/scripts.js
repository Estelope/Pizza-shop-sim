//bussiness logic 

class Pizza {
  constructor(toppings, size) {
    if (!Array.isArray(toppings)) {
      throw new Error("Invalid input for toppings. An array is expected.");
    }
    for (const topping of toppings) {
      if (!/^[A-Za-z]+$/.test(topping)) {
        throw new Error("Invalid input for toppings. Only letters are allowed.");
      }
    }
    if (!["small", "medium", "large"].includes(size)) {
      throw new Error("Invalid input for size. Only 'small', 'medium', or 'large' are allowed.");
    }
    this.toppings = toppings;
    this.size = size;
  };

  calculateTotal() {
    const basePrice = 12;
    let toppingPrice = this.toppings.length * 2;
    let sizePrice = {
      small: 5,
      medium: 10,
      large: 15
    };
    if (this.toppings.length === 0) {
      throw new Error("No toppings selected. Please choose at least one topping.");
    }

    let totalCost = basePrice + toppingPrice + sizePrice[this.size];
    return totalCost;
  };
}



// ui logic
function handleSubmission(event) {
  event.preventDefault();

  const selectedToppings = Array.from(document.querySelectorAll('input[name="topping"]:checked'))
    .map(function (checkbox) {
      return checkbox.value;
    });

  const selectedSize = document.querySelector('input[name="size"]:checked').value;

  let usersPizza= new Pizza(selectedToppings, selectedSize)
  let cost =usersPizza.calculateTotal();

  let resultDiv = document.createElement("div");
  let p = document.createElement("p");
  resultDiv.appendChild(p);
  p.innerText = "Your total cost:$" + cost;

  document.getElementById("pizza-form").setAttribute("class", "hidden");
  document.body.appendChild(resultDiv);

}

window.addEventListener("load", function () {
  const pizzaForm = document.querySelector("form#pizza-form");
  pizzaForm.addEventListener("submit", handleSubmission);
  pizzaForm.addEventListener("reset", handleSubmission);
});


//add functionality for buttons to appear and dissappear on submit and display total in <p>