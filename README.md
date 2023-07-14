# Pizza shop sim
 practice application where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.








Describe: Pizza();
  Test:"It should return a Pizza object with the desired properties for toppings as an array"
  Code: const myPizza = new Pizza(["anchovies", "pineapple"]);
  Expected Output: Pizza { toppings: ["anchovies", "pineapple"]};

  Test:"When inputting a Pizza's toppings it should expect an array"
  Code: const myPizza = new Pizza("anchovies", "pineapple");
  Expected Output: Error ("Invalid input for toppings. An array is expected.");

  Test:"When inputting a Pizza's toppings it should take only words within the array, no numbers or special characters"
  Code: const myPizza = new Pizza(["anchovies", "pin5apple"]);
  Expected Output: Error ("Invalid input for toppings. Only letters are allowed.");

  Test: "It should return a Pizza object with the correct size selection"
  Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
  Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" };

  Test: "When inputting a Pizza's size selection, it should take only 'small', 'medium', or 'large' as the input.
  Code: const myPizza = new Pizza(["anchovies", "pineapple"], "mediummm");
  Expected Output: Error ("Invalid input for size. Only 'small', 'medium', or 'large' are allowed.");



Describe: CalculateTotal();
  Test: "It should return a Pizza object with a correct total cost dependent on size and toppings."
  Code:const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
      console.log(myPizza.calculateTotal());
  Expected Output: "26"


