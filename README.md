# Pizza shop sim
 
 #### By Estevan Lopez

#### Practice application where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.

## Technologies Used

* HTML/CSS
* Markdown
* Github
* JavaScript ES6
* Browsers 


## Description

This program was created with TDD development to further practice working with objects and constructor functions. The user has the option to select from a range of checkboxes for selecting toppings, along with a radio button for choosing the size of the pizza.The program validates the user's input to ensure that only valid toppings and sizes are selected. It then calculates the total cost of the pizza based on the chosen toppings and size. The program provides a simple and interactive way for users to customize and order their pizzas online.



## Setup/Installation Requirements

* requires internet connection to load
* simply click the link to view live installment on GH pages 
* Or clone the repository to edit  
* Navigate to top level of directory
* open index.html in compatible web browser
* below is the link for cloning the repo
* repo: https://github.com/Estelope/Pizza-shop-sim.git


## Known Bugs

* If it crashes clone the repository and start again
* email the host if there are re-occuring issues or any questions

## licensing info 
*Copyright (c) 7/13/2023 Estevan Lopez
*MIT license below
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



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


