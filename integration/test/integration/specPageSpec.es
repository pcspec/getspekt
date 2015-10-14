const expect = require("chai").expect;
const Faker = require("faker");
const SVG = require("raphael");

let
  system = new SpecFactory(),
  tower = new TowerEntity(),
  entities = system.fetch({email: Faker.internet.email()})
;

describe("SpecPageInntegration", () => {
  describe("Create a system factory", () => {
    it("should fetch data from server given an username", () => {

    });
    it("");
  });
});
