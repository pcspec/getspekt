const n = require("nanoajax");

export class SpecFactory{
  constructor(pieceEntities = [], url = "") {
    if (0 !== pieceEntities.length) {
      this.pieces = pieceEntities;
    } else {
      this.pieces = []
    }
    this.url = url;
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

  fetch() {
    if (0 === this.url.length) {
      return false;
    }
    return n.ajax(
      {url: this.url},
      (code, responseText) =>  responseText;
    );

  }
}
