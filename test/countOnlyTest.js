const assert = require('chai').assert;
const countOnly  = require('../countOnly');
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", ( )=> {
  it("returns 1 for result['Jason']", () => {
    assert.strictEqual(result["Jason"], 1);
  });

  it("returns undefined for result['Karima']", () => {
    assert.strictEqual(result["Karima"], undefined);
  });

  it("returns 2 for result['Fang']", () => {
    assert.strictEqual(result["Fang"], 2);
  });

  it("returns undefined for result['Agouhanna']", () => {
    assert.strictEqual(result["Agouhanna"], undefined);
  });
});