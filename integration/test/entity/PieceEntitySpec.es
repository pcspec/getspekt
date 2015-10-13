const expect = require("chai").expect;

import {TowerEntity} from "../../assets/es/entity/TowerEntity.es";
import {PieceEntity} from "../../assets/es/entity/PieceEntity.es";

describe("PieceEntitySpec", ()  => {
  let entity;
  beforeEach( () => {
    entity = new PieceEntity("entity");
  });
  it("should be instance of TowerEntity", () => {
    expect(entity).to.be.instanceOf(TowerEntity);
  });
  it("should be instance of PieceEntity", () => {
    expect(entity).to.be.instanceOf(PieceEntity);
  });
  it("should set a position in the tower pc", () => {
    entity.tower = {
      x: 120, y: 120, w: 150, h: 150
    };
    expect(entity.tower.x).to.equals(120);
    expect(entity.tower.y).to.equals(120);
  });
  it("should return false if position is not correct", () => {
    entity.tower = {};
    expect(entity.tower).to.equals(false);
  });
  it("sould set a position for the modal", () => {
    entity.modal = {
      x: 80, y: 50, w:100, h: 100
    };
    expect(entity.modal.x).to.equals(80);
    expect(entity.modal.y).to.equals(50);
  });
  it("should return false if position is not correct", () => {
    entity.modal = {};
    expect(entity.modal).to.equals(false);
  });
});
