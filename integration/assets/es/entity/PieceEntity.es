import {TowerEntity} from "./TowerEntity.es";
import {piece} from "../piece/piece.es";
import {anchor} from "../piece/anchor.es";
import {icon} from "../piece/icon.es";
import {image} from "../piece/image.es";
import {label} from "../piece/label.es";

export class PieceEntity extends TowerEntity{
  constructor(name) {
    super(name);
  }

  set tower(coords) {
    if (this.validatePosition(coords)) {
      this._tower = coords;
      return;
    }
    this._tower = false;
  }
  get tower() {
    return this._tower;
  }

  set modal(coords) {
    if (this.validatePosition(coords)) {
      this._modal = coords;
      return;
    }
    this._modal = false;
  }

  get modal() {
    return this._modal;
  }

  create() {
    this.coords = piece(
      this.tower,
      anchor(icon(label(image(this.modal))), this.global)
    );
  }

  validatePosition(coords) {
    return coords && "x" in coords && "y" in coords;
  }
}
