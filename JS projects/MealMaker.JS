const menu = {
    _courses: {
  appetizers: [],
  mains: [],
  desserts: [], 
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  get appetizers () {
    return this._courses.appetizers;
  },
  set appetizers (appetizerIn) {
  this._courses.appetizers = appetizerIn;
  },
  get mains () {
    return this._courses.mains;
  },
  set mains (mainIn) {
  this._courses.main = mainIn;
  },
  get desserts () {
    return this._courses.desserts;
  },
  set desserts (dessertIn) {
  this._courses.desserts = dessertIn;
  },
  generateRandomMeal() {
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice}.`;
  },
  addDishToCourse (courseName, dishName, dishPrice) {
  const dish = {
  name: dishName,
  price: dishPrice,
  };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random()*dishes.length);
    return dishes[randomIndex];
  },
  };
  menu.addDishToCourse('appetizers', ' salad',  7);
  menu.addDishToCourse('appetizers', 'ceaser sause', 3);
  menu.addDishToCourse('appetizers', 'wings', 11);
  menu.addDishToCourse('mains', 'steak', 24);
  menu.addDishToCourse('mains', 'pasta', 16);
  menu.addDishToCourse('mains', 'pizza', 19);
  menu.addDishToCourse('desserts', 'cake', 15.50);
  menu.addDishToCourse('desserts',  'ice cream', 7.50);
  menu.addDishToCourse('desserts', 'pudding', 9);
  let meal = menu.generateRandomMeal();
  console.log(meal);
