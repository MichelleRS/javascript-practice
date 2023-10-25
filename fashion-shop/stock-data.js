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
