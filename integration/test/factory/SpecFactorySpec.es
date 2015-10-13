const expect = require("chai").expect;

import {SpecFactory} from "../../assets/es/factory/SpecFactory.es";
import {PieceEntity} from "../../assets/es/entity/PieceEntity.es";

describe("SpecFactorySpec", () => {
  let factory;
  beforeEach(() => {
    factory = new SpecFactory();
  });
  it("should be instance of SpecFactory", () => {
    expect(factory).to.be.instanceOf(SpecFactory);
  });
  it("should initialize without params", () => {
    expect(factory.pieces).to.eql([]);
  });
  it("should initialize with entities", () => {
    let entities, f;
    entities = [
      new PieceEntity("entity"),
      new PieceEntity("enti"),
      new PieceEntity("en"),
    ];
    f = new SpecFactory(entities);
    expect(f.pieces).to.have.length(3);
  });
  it("should set a name", () => {
    factory.name = "system";
    expect(factory.name).to.equals("system");
  });
});
