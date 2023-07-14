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
    this.name = "Pizza";
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
    let totalCost = basePrice + toppingPrice + sizePrice[this.size];
    return totalCost;
  };


}



// ui logic
//cost = pizza.calculateTotal();
//console.log(('The total cost of your pizza is $' + cost));