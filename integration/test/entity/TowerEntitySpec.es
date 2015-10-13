const expect = require("chai").expect;

import {BaseEntity} from "../../assets/es/entity/BaseEntity.es";
import {TowerEntity} from "../../assets/es/entity/TowerEntity.es";

describe("TowerEntitySpec", () => {
  let entity;
  beforeEach( () => {
    entity = new TowerEntity("entity");
  });
  it("should be instance of BaseEntity", () => {
    expect(entity).to.be.instanceOf(BaseEntity);
  });
  it("should be instance of TowerEntity", () => {
    expect(entity).to.be.instanceOf(TowerEntity);
  });
  it("should set a spec name", () => {
    expect(entity.name).to.equals("entity");
  });
  it("should set a tower position", () => {
    entity.global = {
      x: 2, y: 3, w: 5, h: 5
    };
    expect(entity.global.x).to.equals(2);
    expect(entity.global.y).to.equals(3);
  });
});
