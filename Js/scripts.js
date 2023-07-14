//bussiness logic 

class Pizza {
  constructor(toppings, size) {
    characterList = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if (toppings.includes(characterList)) {
      
      console.log("invalid input use letters only")
    }
    this.name = "Pizza";
    this.toppings = toppings;
    this.size = size;
  };
  
    calculateTotal(){
    const basePrice = 12;
    }

  
  
}


