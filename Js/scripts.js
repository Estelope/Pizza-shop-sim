//bussiness logic 

class Pizza {
  constructor(toppings, size) {
    if (!Array.isArray(toppings)) {
      throw new Error("Invalid input for toppings. An array is expected.");
    }
    for (const topping of toppings) {
      if (!/^[A-Za-z]+$/.test(topping)) {
        throw new Error("Invalid input for toppings. Only letters are allowed.")
      }
    }
    this.name = "Pizza";
    this.toppings = toppings;
    this.size = size;

  };

  calculateTotal() {
    const basePrice = 12;
  }



}
