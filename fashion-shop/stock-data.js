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

  // method: schema used for form controls when adding stock
  static StockItemSchema = [
    {
      id: "price",
      prompt: "Price",
      inputType: "input",
    },
    {
      id: "stockLevel",
      prompt: "Stock Level",
      inputType: "input",
    },
    {
      id: "description",
      prompt: "Description",
      inputType: "textarea",
      rows: 5,
      cols: 40,
    },
    {
      id: "color",
      prompt: "Color",
      inputType: "input",
    },
  ];

  // build and return a form element
  // static renderFormElement() {
  //   let formEl = document.createElement("form");
  //   return formEl;
  // }

  // build and return a form control container with input element
  static renderFormControl(item) {
    // create a parent element for form control
    let divEl = document.createElement("div");
    divEl.className = "formControl";

    /* child: label element */
    let labelEl = document.createElement("label");
    labelEl.innerText = `${item.prompt}:`;
    labelEl.className = "formControlLabel";
    labelEl.setAttribute("for", item.id);
    divEl.appendChild(labelEl);

    /* child: input element */
    let inputEl;
    // decide input type
    switch (item.inputType) {
      case "input":
        inputEl = document.createElement("input");
        break;
      case "textarea":
        inputEl = document.createElement("textarea");
        inputEl.setAttribute("rows", item.rows);
        inputEl.setAttribute("cols", item.cols);
        break;
    }
    inputEl.className = "formControlInput";
    inputEl.setAttribute("id", item.id);
    divEl.appendChild(inputEl);

    // return parent element
    return divEl;
  }

  // method to build form
  static buildElementsFromSchema(formEl, dataSchema) {
    // loop through each item in the schema
    for (let item of dataSchema) {
      // render form control
      let formControlEl = StockItem.renderFormControl(item);
      console.log("formControlEl", formControlEl);
      // append to form
      formEl.appendChild(formControlEl);
    }
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
    let result = `Ref:${this.stockRef} Stock Level:${this.stockLevel} Price:${this.price} Description:${this.description} Color:${this.color}`;
    // return string
    return result;
  }
  // get html for form
  getHTML(formEl) {
    StockItem.buildElementsFromSchema(formEl, StockItem.StockItemSchema);
  }
}

// subclass for dress
class Dress extends StockItem {
  // dress properties
  constructor(stockRef, stockLevel, price, description, color, pattern, size) {
    super(stockRef, stockLevel, price, description, color);
    this.type = "dress";
    this.pattern = pattern;
    this.size = size;
  }

  // method: get an item description to be displayed on Stock List page
  getDescription() {
    // build string for item description
    let result =
      super.getDescription() + ` Pattern:${this.pattern} Size:${this.size}`;
    // return string
    return result;
  }

  // static dress schema: used to build the form display for the dress
  static DressSchema = [
    {
      id: "pattern",
      prompt: "Pattern",
      inputType: "input",
    },
    {
      id: "size",
      prompt: "Size",
      inputType: "input",
    },
  ];

  getHTML(formEl) {
    console.log("Hello from getHTML in Dress!");
    super.getHTML(formEl);
    StockItem.buildElementsFromSchema(formEl, Dress.DressSchema);
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
    this.type = "pants";
    this.pattern = pattern;
    this.waist = waist;
    this.length = length;
  }

  // method: get an item description to be displayed on Stock List page
  getDescription() {
    // build string for item description
    let result =
      super.getDescription() +
      ` Pattern:${this.pattern} Waist:${this.waist} Length:${this.length}`;
    // return string
    return result;
  }

  // static pants schema: used to build the form display for the dress
  static PantsSchema = [
    {
      id: "pattern",
      prompt: "Pattern",
      inputType: "input",
    },
    {
      id: "waist",
      prompt: "Waist",
      inputType: "input",
    },
    {
      id: "length",
      prompt: "Length",
      inputType: "input",
    },
  ];

  getHTML(formEl) {
    super.getHTML(formEl);
    StockItem.buildElementsFromSchema(formEl, Pants.PantsSchema);
  }

  // static class members for test data
  static colors = ["olive", "washed black"];
  static patterns = ["plain", "corduroy"];
  static lengths = ["petite", "standard", "tall"];
  static waists = [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];

  // method: get test data
  static getTestItems(dest) {
    // set stock number as one higher than the current largest stock reference in fashion shop
    let stockNo = StockItem.getLargestStockRef(dest) + 1;
    // loop through pants colors
    for (let color of Pants.colors) {
      // loop through pants patterns
      for (let pattern of Pants.patterns) {
        // get a random price
        let price = StockItem.getRandomInt(40, 300);
        // loop through pants length
        for (let length of Pants.lengths) {
          // loop through pants waists
          for (let waist of Pants.waists) {
            // get a random stock level
            let stock = StockItem.getRandomInt(0, 15);
            // build a description string
            let description = `${color} ${pattern} pants`;
            // create a new Pants object and store it
            dest[dest.length] = new Pants(
              stockNo,
              stock,
              price,
              description,
              color,
              pattern,
              length,
              waist
            );
            // advance the stock number
            stockNo = stockNo + 1;
          }
        }
      }
    }
  }
}

// TEST
// window.addEventListener("load", () => {
//   console.log("Hello from stock data!");
//   let demo = [];
//   Dress.getTestItems(demo);
//   Pants.getTestItems(demo);
//   for (let item of demo) {
//     console.log("item.getDescription()", item.getDescription());
//   }
// });
