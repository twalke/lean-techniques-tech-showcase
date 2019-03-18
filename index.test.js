const main = require("./index");

test("test if object is returned", function() {
  expect(typeof main()).toBe("object")
})
