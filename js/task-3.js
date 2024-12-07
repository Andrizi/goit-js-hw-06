// ====================== TASK 3 ======================

console.log("====================== TASK 3 ======================");

class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }
  padEnd(str) {
    if (typeof str !== "string") {
      console.log("This is'n a string!");
      return;
    }
    this.#value += str;
  }
  padStart(str) {
    if (typeof str !== "string") {
      console.log("This is'n a string!");
      return;
    }
    this.#value = str + this.#value;
  }
  padBoth(str) {
    if (typeof str !== "string") {
      console.log("This is'n a string!");
      return;
    }
    this.#value = str + this.#value;
    this.#value += str;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
