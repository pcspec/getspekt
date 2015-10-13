import {BaseEntity} from "./BaseEntity.es";

export class TowerEntity extends BaseEntity {
  constructor(name) {
    super();
    this.name = name;
  }
  set global(coords) {
    if (coords) {
      this._global = coords;
    }
  }
  get global() {
    return this._global;
  }
}
