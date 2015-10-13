export class SpecFactory{
  constructor(pieceEntities = []) {
    if (0 !== pieceEntities.length) {
      this.pieces = pieceEntities;
    } else {
      this.pieces = []
    }
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  addPiece (piece) {
    this.pieces.push(piece);
  }
}
