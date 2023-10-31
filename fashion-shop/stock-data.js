// superclass for all items the fashion shop sells
class StockItem {
  // method: get a random number
  static getRandomInt(min, max) {
    let range = max - min + 1;
    let randomInt = Math.floor(Math.random() * range) + min;
    return randomInt;
  }

  // method: find the largest stock reference in fashion shop
  static getLargestStockRef(items) {
    // handle zero stock items
    if (items.length == 0) {
      return 0;
    }
    // initialize variable for largest: set as first stock item
    let largest = items[0].stockRef;
    // loop through stock items
    for (const item of items) {
      // check if stock reference of item is larger than initialized value
      if (item.stockRef > largest) {
        // set item as the largest stock reference value
        largest = item.stockRef;
      }
    }
    return largest;
  }

  // constructor method for shared properties
  constructor(stockRef, stockLevel, price, description, color) {
    this.stockRef = stockRef;
    this.stockLevel = stockLevel;
    this.price = price;
    this.description = description;
    this.color = color;
  }

  // method: get an item description
  getDescription() {
    // build string for item description
    let result =
      // stock reference
      "Ref:" +
      this.stockRef +
      // stock level
      " Stock Level:" +
      this.stockLevel +
      // price
      " Price:" +
      this.price +
      // description
      " Description:" +
      this.description +
      // color
      " Color:" +
      this.color;
    // return string
    return result;
  }
}

// subclass for dress
class Dress extends StockItem {
  // dress properties
  constructor(stockRef, stockLevel, price, description, color, pattern, size) {
    super(stockRef, stockLevel, price, description, color);
    this.pattern = pattern;
    this.size = size;
  }

  // method: get an item description to be displayed on Stock List page
  getDescription() {
    // build string for item description
    let result =
      // get description from superclass
      super.getDescription() +
      // pattern
      " Pattern:" +
      this.pattern +
      // size
      " Size:" +
      this.size;
    // return string
    return result;
  }

  // static class members for test data
  static colors = ["terracotta", "hunter green", "coyote", "navy"];
  static patterns = ["plain", "striped", "floral"];
  static sizes = ["xs", "s", "m", "l", "xl"];

  // method: get test data
  static getTestItems(dest) {
    // set stock number as one higher than the current largest stock reference in fashion shop
    let stockNo = StockItem.getLargestStockRef(dest) + 1;
    // loop through dress colors
    for (let color of Dress.colors) {
      // loop through dress patterns
      for (let pattern of Dress.patterns) {
        // get a random price
        let price = StockItem.getRandomInt(40, 300);
        // loop through dress sizes
        for (let size of Dress.sizes) {
          // get a random stock level
          let stock = StockItem.getRandomInt(0, 15);
          // build a description string
          let description = `${color} ${pattern} dress`;
          // create a new Dress and store it
          dest[dest.length] = new Dress(
            stockNo,
            stock,
            price,
            description,
            color,
            pattern,
            size
          );
          // advance the stock number
          stockNo = stockNo + 1;
        }
      }
    }
  }
}

// subclass for pants
class Pants extends StockItem {
  // pants properties
  constructor(
    stockRef,
    stockLevel,
    price,
    description,
    color,
    pattern,
    length,
    waist
  ) {
    super(stockRef, stockLevel, price, description, color);
    this.pattern = pattern;
    this.waist = waist;
    this.length = length;
  }

  // method: get an item description to be displayed on Stock List page
  getDescription() {
    // build string for item description
    let result =
      // get description from superclass
      super.getDescription() +
      // pattern
      " Pattern:" +
      this.pattern +
      // waist
      " Waist:" +
      this.waist +
      // length
      " Length:" +
      this.length;
    // return string
    return result;
  }
}

// TEST
window.addEventListener("load", () => {
  console.log("Hello from stock data!");
  // get test data
  let demo = [];
  Dress.getTestItems(demo);
  for (let item of demo) {
    console.log("item.getDescription()", item.getDescription());
  }
});
