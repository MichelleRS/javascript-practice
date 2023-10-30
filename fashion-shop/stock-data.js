// superclass for all items the fashion shop sells
class StockItem {
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
  let testDress = new Dress(
    // ref
    221,
    // stock level
    7,
    // price
    129,
    // description
    "spaghetti straps",
    // color
    "green",
    // pattern
    "floral",
    // size
    "small"
  );
  console.log("testDress.getDescription()", testDress.getDescription());

  // TEST pants
  let testPants = new Pants(
    // ref
    222,
    // stock level
    2,
    // price
    99,
    //description
    "Flair",
    // color
    "Olive",
    // pattern
    "Plaid",
    // waist
    "25",
    // length
    "30"
  );
  console.log("testPants.getDescription()", testPants.getDescription());
});
