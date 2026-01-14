function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Parameter harus angka");
  }
  return a + b;
}

module.exports = add;
