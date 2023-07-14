# Pizza shop sim
 practice application where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.








Describe: Pizza();
  Test:"It should return a Pizza object with the desired two properties for toppings"
  Code: const myPizza = new Pizza(["anchovies", "pineapple"]);
  Expected Output: Pizza { toppings: ["anchovies", "pineapple"]}

  Test: "It should return a Pizza object with correct size selection"
  Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
  Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }|


Describe: CalculateTotal();
  Test:  It should return a Pizza object with a correct total cost dependent on size and toppings."
  Code:
  Expected Output: 


