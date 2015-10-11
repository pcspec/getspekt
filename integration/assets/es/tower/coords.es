export class Coords {
  constructor() {
    this._pieces = {};
  }

  //setter
  set tower(coords) {
    if (coords) {
      this._tower = coords;
    }
  }

  set piece(p) {
    this._pieces.push(p);
  }

  //getter
  get tower() {
    return this._tower;
  }

  get piece() {
    return this._pieces;
  }
}
