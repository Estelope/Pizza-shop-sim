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
    this.name = "Pizza";
    this.toppings = toppings;
    this.size = size;
  };

  calculateTotal() {
    const basePrice = 12;
    let topppingPrice = this.toppings.length * 2;
    let sizePrice = {
      small: 5,
      medium: 10,
      large: 15
    };
    let totalCost = basePrice + topppingPrice + sizePrice[this.size];
return totalCost;
  }



}



// ui logic
//cost = pizza.calculateTotal();
//console.log(('The total cost of your pizza is $' + cost));