# Pizza shop sim
 practice application where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.








Describe: Pizza();
  Test:"It should return a Pizza object with the desired properties for toppings as an array"
  Code: const myPizza = new Pizza(["anchovies", "pineapple"]);
  Expected Output: Pizza { toppings: ["anchovies", "pineapple"]};

  Test:"When inputting a Pizza's toppings it should expect an array"
  Code: const myPizza = new Pizza("anchovies", "pineapple");
  Expected Output: Error ("Invalid input for toppings. An array is expected.");

  Test:"When inputting a Pizza's toppings it should take words as the input, no numbers or special characters"
  Code: const myPizza = new Pizza(["anchovies", "pin5apple"]);
  Expected Output: Error ("Invalid input for toppings. Only letters are allowed.");

  Test: "It should return a Pizza object with correct size selection"
  Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
  Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" };




Describe: CalculateTotal();
  Test:  It should return a Pizza object with a correct total cost dependent on size and toppings."
  Code:
  Expected Output: 


